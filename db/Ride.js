const Sequelize = require("sequelize");
const db = require("./db");

const Ride = db.define("ride", {
	start: {
		type: Sequelize.STRING,
	},
	end: {
		type: Sequelize.STRING,
	},
});

module.exports = Ride;
