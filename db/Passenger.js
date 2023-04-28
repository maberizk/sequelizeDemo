const Sequelize = require("sequelize");
const db = require("./db");

const Passenger = db.define("passenger", {
	name: {
		type: Sequelize.STRING,
	},
});

module.exports = Passenger;
