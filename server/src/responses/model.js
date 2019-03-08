const Sequelize = require("sequelize");
const sequelize = require("../../db");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

const Response = sequelize.define("students", {
  time_date: {
    type: Sequelize.time_date,
    allowNull: false
  }
});

Response.belongsTo(Student);
Response.belongsTo(Answer);

module.exports = Response;
