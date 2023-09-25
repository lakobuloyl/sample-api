const express = require("express");
const router = express.Router();
// Create an Express application

const getTerminalHandler = require("../handlers/get-terminal");
const createTerminalHandler = require("../handlers/create-terminal");
const getByIdTerminalHandler = require("../handlers/get-byId-terminal");
const updateTodaHandler = require("../handlers/update-terminal");

router.get("/v1/terminal", getTerminalHandler);
router.post("/v1/terminal", createTerminalHandler);
router.get("/v1/terminal/id", getByIdTerminalHandler);
router.put("/v1/terminal", updateTodaHandler);


module.exports = router;
