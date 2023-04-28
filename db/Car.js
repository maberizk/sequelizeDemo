const Sequelize = require("sequelize");
const db = require("./db");

const Car = db.define("car", {
	make: {
		type: Sequelize.STRING,
	},
	model: {
		type: Sequelize.STRING,
	},
	license_plate: {
		type: Sequelize.STRING,
	},
});

module.exports = Car;
