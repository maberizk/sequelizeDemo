const express = require("express");
// grabbing driver table/model from db. added Car for include. destructuring so you can use individual module. 
const { Driver, Car } = require("../db");
// initialize router. want to have routes divided. 
const driverRouter = express.Router();

// gets every instance of a driver from database. findAll is from sequalize 
driverRouter.get("/", async (req, res, next) => {
	try {
		const data = await Driver.findAll({
			// added include Car for all drivers route 
			include: [Car]
		});
		res.send(data);
	} catch (err) {
		next(err);
	}
});

// route by id. get it by req.params.  
driverRouter.get("/:id", async (req, res, next) => {
	// could also be const id = req.params.id;
	const { id } = req.params;
	try {
		// look for row with primary key being passed into the route 
		const data = await Driver.findByPk(id);
		res.send(data);
	} catch (err) {
		next(err);
	}
});

// if the driver is aprroved 
driverRouter.get("/:id/approved", async (req, res, next) => {
	const { id } = req.params;
	try {
		// get specific driver by id
		const driver = await Driver.findByPk(id);
		if (driver.isApproved()) {
			res.send(true)
		} else {
			res.status(401);
		}
	}
	catch (err) {
		next(err)
	}
})

module.exports = driverRouter;
