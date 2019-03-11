const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Student = require("../students/model");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

const Response = sequelize.define(
  "responses",
  {
    response_time: {
      type: "TIMESTAMP",
      allowNull: false,
      field: "response_time",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
  },
  {
    tableName: "responses",
    timestamps: false
  }
);

Response.belongsTo(Student, { foreignKey: "student_id" });
Student.hasMany(Response, { foreignKey: "student_id" });

module.exports = Response;
