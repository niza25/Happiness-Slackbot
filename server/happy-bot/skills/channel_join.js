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
        const classId = findCodClass.dataValues.id;

        res.channel.members.forEach(member => {
          bot.api.users.info({ user: member }, async (err, res) => {
            // Use https://crontab.guru/ to figure out the format.
            const morningSurvey = new CronJob(
              "*/1 * * * MON-FRI",
              () => {
                console.log("do something!");
                sendSurvey(res, member, classId, bot);
              },
              null,
              true,
              "Europe/Amsterdam"
            );

            morningSurvey.start();
          });
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
};

const askQuestion = (convo, questions, i, studentId) => {
  const thread = i ? `q${i + 1}` : "default";

  convo.addQuestion(
    questions[i],
    async (res, convo) => {
      console.log(i, thread);
      try {
        await Response.create({
          answer: res.event.text,
          student_id: studentId,
          question_id: i + 1
        });
        const nextThread = i !== 2 ? `q${i + 2}` : "stop";
        console.log(i, nextThread);
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
  if (res.user.is_bot) {
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
    console.log(student.dataValues);

    const questions = await Question.findAll().map(
      question => question.dataValues.text
    );

    bot.startPrivateConversation({ user: member }, async function(err, convo) {
      if (err) {
        console.log(error);
      } else {
        askQuestion(convo, questions, 0, studentId);

        askQuestion(convo, questions, 1, studentId);

        askQuestion(convo, questions, 2, studentId);

        convo.addQuestion(
          "Thanks, you've been very helpful",
          (res, convo) => {
            convo.stop();
          },
          {},
          "stop"
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};
