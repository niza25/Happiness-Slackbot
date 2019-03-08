const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Student = require("../students/model");

// String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:242:13
// Todo: fix above error.

// Class and class are reserved so we call this CodClass, short for Codaisseur Class.

const CodClass = sequelize.define(
  "classes",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "name"
    }
  },
  { tableName: "classes", timestamps: false }
);

Student.belongsTo(CodClass);

module.exports = CodClass;
