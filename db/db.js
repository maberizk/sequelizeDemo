const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/carshare");

module.exports = db;
