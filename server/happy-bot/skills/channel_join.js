var debug = require("debug")("botkit:channel_join");
const CodClass = require("../../src/classes/model");
const Question = require("../../src/questions/model");
const Student = require("../../src/students/model");
const Response = require("../../src/responses/model");
const CronJob = require("cron").CronJob;

module.exports = function(controller) {
  controller.on("bot_channel_join", (bot, message) => {
    bot.api.channels.info({ channel: message.channel }, async (err, res) => {
      try {
        const findCodClass = await CodClass.findOne({
          where: { name: res.channel.name }
        });
        const codClass = await (findCodClass
          ? findCodClass
          : CodClass.create({ name: res.channel.name }));
        const classId = codClass.dataValues.id;
        // The surveys functions creates and starts a Crontask that sends the survey to all normal users in the channel.
        // Use https://crontab.guru/ for the Crontab format.

        surveys("*/1 * * * MON-FRI", bot, classId, message);
      } catch (err) {
        console.log(err);
      }
    });
  });
};

const askQuestion = (convo, questions, i, studentId, classId) => {
  const thread = i ? `q${i + 1}` : "default";

  convo.addQuestion(
    questions[i],
    async (res, convo) => {
      try {
        await Response.create({
          answer: res.event.text,
          student_id: studentId,
          question_id: i + 1
          // class_id: classId
        });
        const nextThread = i !== 2 ? `q${i + 2}` : "stop";
        convo.gotoThread(nextThread);
      } catch (err) {
        console.log(err);
      }
    },
    {},
    thread
  );
};

const sendSurvey = async (res, member, classId, bot) => {
  if (res.user.is_bot || res.user.is_admin || res.user.is_owner) {
    return false;
  }
  try {
    const findStudent = await Student.findOne({
      where: { slack: member, class_id: classId }
    });
    const student = await (findStudent
      ? findStudent
      : Student.create({ slack: member, class_id: classId }));
    const studentId = student.dataValues.id;

    const questions = await Question.findAll().map(
      question => question.dataValues.text
    );

    // To do, stop slack from sending error message if student responds after convo closes.
    bot.startPrivateConversation({ user: member }, function(err, convo) {
      if (err) {
        console.log(err);
      } else {
        convo.setTimeout(10 * 1000);

        console.log(convo);

        askQuestion(convo, questions, 0, studentId);

        askQuestion(convo, questions, 1, studentId);

        askQuestion(convo, questions, 2, studentId);

        convo.addMessage(
          "Thanks, you've been very helpful",

          "stop"
        );

        convo.addMessage(
          "Thanks, you've been useless.",

          "on_timeout"
        );

        convo.activate();
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const surveys = (dateStr, bot, classId, message) =>
  new CronJob(
    dateStr,
    () => {
      bot.api.channels.info(
        // We need to refresh the channel info each time in order to keep track of students.
        { channel: message.channel },
        (err, res) => {
          res.channel.members.forEach(member => {
            bot.api.users.info({ user: member }, async (err, res) => {
              sendSurvey(res, member, classId, bot);
            });
          });
        }
      );
    },
    null,
    true,
    "Europe/Amsterdam"
  );
