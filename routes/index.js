const express = require("express");
const router = express.Router();
// 2 routes and using them 
const rideRouter = require("./ride");
const driverRouter = require("./driver");

router.use("/driver", driverRouter);
router.use("/ride", rideRouter);

module.exports = router;
