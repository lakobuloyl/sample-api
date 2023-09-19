const express = require("express");
const router = express.Router()
// Create an Express application

const getAccountsHandler = require("../handlers/get-accounts");

router.get("/v1/getAccounts", getAccountsHandler);

module.exports = router