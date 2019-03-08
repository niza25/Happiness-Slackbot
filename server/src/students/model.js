const Sequelize = require("sequelize");
const sequelize = require("../../db");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

const Student = sequelize.define("students", {
  class: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
});

Student.belongsTo(Class);
Student.hasMany(Response);

module.exports = Student;
