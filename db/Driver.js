const Sequelize = require("sequelize");
const db = require("./db");

const Driver = db.define("driver", {
	name: {
		type: Sequelize.STRING,
	},
	rating: {
		type: Sequelize.ARRAY(Sequelize.INTEGER),
		allowNull: true,
	},
});

module.exports = Driver;
