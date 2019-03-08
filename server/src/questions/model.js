const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Answer = require("../answers/model");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

const Question = sequelize.define(
  "questions",
  {
    question: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "question"
    }
  },
  { tableName: "questions", timestamps: false }
);

Question.hasMany(Answer);
Answer.belongsTo(Question);

module.exports = Question;
