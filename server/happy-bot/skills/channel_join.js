var debug = require("debug")("botkit:channel_join");
const CodClass = require("../../src/classes/model");

module.exports = function(controller) {
  controller.on("bot_channel_join", function(bot, message) {
    const codClass = {
      name: "test"
    };

    CodClass.create(codClass);

    bot.reply(message, {
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
    });
  });
};
