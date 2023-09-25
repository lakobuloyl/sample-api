const express = require("express");
const router = express.Router();
// Create an Express application

const getTodaHandler = require("../handlers/get-toda");
const createTodaHandler = require("../handlers/create-toda");
const getByIdTodaHandler = require("../handlers/get-byId-toda");
const updateTodaHandler = require("../handlers/update-toda");

router.get("/v1/toda", getTodaHandler);
router.post("/v1/toda", createTodaHandler);
router.get("/v1/toda/id", getByIdTodaHandler);
router.put("/v1/toda", updateTodaHandler);


module.exports = router;
