const express = require("express");
const { Ride } = require("../db");

const rideRouter = express();

rideRouter.get("/", async (req, res, next) => {
	try {
		const data = await Ride.findAll();
		res.send(data);
	} catch (err) {
		next(err);
	}
});

module.exports = rideRouter;
