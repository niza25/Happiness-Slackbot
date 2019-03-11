var debug = require("debug")("botkit:channel_join");
const CodClass = require("../../src/classes/model");
const Question = require("../../src/questions/model");
const Student = require("../../src/students/model");
const Response = require("../../src/responses/model");

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

              bot.startPrivateConversation({ user: member }, async function(
                err,
                convo
              ) {
                if (err) {
                  console.log(error);
                } else {
                  convo.addQuestion(
                    questions[0],
                    async (res, convo) => {
                      try {
                        await Response.create({
                          answer: res.event.text,
                          student_id: studentId,
                          question_id: 1
                        });
                        convo.gotoThread("q2");
                      } catch (err) {
                        console.log(err);
                      }
                    },
                    {},
                    "default"
                  );
                  convo.addQuestion(
                    questions[1],
                    async (res, convo) => {
                      try {
                        await Response.create({
                          answer: res.event.text,
                          student_id: studentId,
                          question_id: 2
                        });
                        convo.gotoThread("q3");
                      } catch (err) {
                        console.log(err);
                      }
                    },
                    {},
                    "q2"
                  );
                  convo.addQuestion(
                    questions[2],
                    async (res, convo) => {
                      try {
                        await Response.create({
                          answer: res.event.text,
                          student_id: studentId,
                          question_id: 3
                        });
                        convo.gotoThread("stop");
                      } catch (err) {
                        console.log(err);
                      }
                    },
                    {},
                    "q3"
                  );
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
          });
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
};
