const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Student = require("../students/model");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

const Response = sequelize.define(
  "responses",
  {
    response_time: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "response_time"
    }
  },
  {
    tableName: "responses",
    timestamps: true
  }
);

Response.belongsTo(Student);

module.exports = Response;
