const express = require("express");
// grab ride table from DB. added passenger and driver 
const { Ride, Passenger, Driver } = require("../db");

const rideRouter = express.Router();

// find every instance of a ride from ride table inside of the DB 
rideRouter.get("/", async (req, res, next) => {
	try {
		const data = await Ride.findAll({
			// need all the info from passenger and driver 
			include: [Passenger, Driver]
		});
		res.send(data);
	} catch (err) {
		next(err);
	}
});

rideRouter.get("/:location", async (req, res, next) => {
	const { location } = req.params;
	try {
		const data = await Ride.endLocations(location);
		if (!data.length) throw new Error("No end location found!")
		res.send(data);

	} catch (err) {
		next(err);
	}
})

module.exports = rideRouter;
