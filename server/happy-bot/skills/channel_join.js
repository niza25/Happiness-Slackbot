var debug = require("debug")("botkit:channel_join");
const CodClass = require("../../src/classes/model");
const Question = require("../../src/questions/model");
const Student = require("../../src/students/model");
const Response = require("../../src/responses/model");

module.exports = function(controller) {
  const answers = {};

  controller.on("bot_channel_join", function(bot, message) {
    bot.api.channels.info({ channel: message.channel }, async (err, res) => {
      let classId = 0;

      const aClass = await CodClass.findOne({
        where: { name: res.channel.name }
      });

      if (!aClass) {
        const codClass = {
          name: res.channel.name
        };
        classId = await CodClass.create(codClass).then(
          res => res.dataValues.id
        );
      } else {
        aClass.dataValues.id;
      }

      const questions = await Question.findAll().map(
        question => question.dataValues.question
      );

      console.log(questions);

      res.channel.members.forEach(member => {
        let isBot = false;

        bot.api.users.info({ user: member }, (err, res) => {
          isBot = res.user.is_bot;

          if (isBot) {
            return false;
          }

          const student = {
            slack: member,
            classId
          };

          Student.create(student);

          answers[member] = { q1: [], q2: [], q3: [] };
          /* bot.startPrivateConversation({ user: member }, function(err, convo) {
            if (err) {
              console.log(err);
            } else {
              // convo.addMessage("Just joined the channel! Let's be friends!");
              convo.addQuestion(
                "How energised do you feel? Please pick a number from 1 to 5",
                (res, convo) => {
                  answers[member].q1 = [...answers[member].q1, res.text];
                  convo.gotoThread("question2");
                },
                {},
                "default"
              );
              convo.addQuestion(
                "How well do you understand the material? Please pick a number from 1 to 5",
                (res, convo) => {
                  answers[member].q2 = [...answers[member].q2, res.text];
                  convo.gotoThread("question3");
                },
                {},
                "question2"
              );
              convo.addQuestion(
                "Whatever the third question was? You should know the drill by now",
                (res, convo) => {
                  answers[member].q3 = [...answers[member].q3, res.text];
                  convo.gotoThread("stop");
                },
                {},
                "question3"
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
          }); */
        });
      });
    });
  });
};

/* bot.reply(message, {
      text: "Wants to know how you are doing today",
      attachments: [
        {
          text:
            "Good morning! How is your energy level right now?\n1 is the lowest and 5 is the highest",
          fallback: "1st_question",
          callback_id: "1_question",
          color: "#dedede",
          attachment_type: "default",
          actions: [
            {
              name: "game",
              action_id: "pick 1",
              text: "1",
              type: "button",
              value: "1"
            },
            {
              name: "game",
              action_id: "pick 2",
              text: "2",
              type: "button",
              value: "2"
            },
            {
              name: "game",
              action_id: "pick 3",
              text: "3",
              type: "button",
              value: "3"
            },
            {
              name: "game",
              action_id: "pick 4",
              text: "4",
              type: "button",
              value: "4"
            },
            {
              name: "game",
              action_id: "pick 5",
              text: "5",
              type: "button",
              value: "5"
            }
          ]
        }
      ]
    }); */
