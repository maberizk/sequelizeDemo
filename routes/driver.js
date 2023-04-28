const express = require("express");
const { Driver } = require("../db");

const driverRouter = express();

driverRouter.get("/", async (req, res, next) => {
	try {
		const data = await Driver.findAll();
		res.send(data);
	} catch (err) {
		next(err);
	}
});

driverRouter.get("/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = await Driver.findByPk(id);
		res.send(data);
	} catch (err) {
		next(err);
	}
});

module.exports = driverRouter;
