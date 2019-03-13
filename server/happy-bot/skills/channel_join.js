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

        askQuestion(0, questions, studentId, convo);

        askQuestion(1, questions, studentId, convo);

        askQuestion(2, questions, studentId, convo);

        convo.say("Thank you! Have fun today");

        convo.addMessage(
          "Okay, I can see you're busy... have fun!",

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

const askQuestion = (i, questions, studentId, convo) =>
  convo.ask(
    {
      attachments: attachment(i, questions)
    },
    async (res, convo) => {
      console.log(res.text);
      await Response.create({
        answer: res.text,
        student_id: studentId,
        question_id: i + 1
        // class_id: classId
      });
      // whoa, I got the postback payload as a response to my convo.ask!
      convo.next();
    }
  );

const attachment = (i, questions) => [
  {
    title: questions[i],
    callback_id: "12345",
    attachment_type: "default",
    actions: [1, 2, 3, 4, 5].map(j => ({
      name: j,
      text: j,
      value: j,
      type: "button"
    }))
  }
];
