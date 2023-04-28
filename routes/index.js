const express = require("express");
const router = express.Router();
const rideRouter = require("./ride");
const driverRouter = require("./driver");

router.use("/driver", driverRouter);
router.use("/ride", rideRouter);

module.exports = router;
