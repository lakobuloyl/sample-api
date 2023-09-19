const express = require("express");
const router = express.Router();
// Create an Express application

const getAccountsHandler = require("../handlers/get-accounts");
const getByIdAccountsHandler = require("../handlers/get-byid-accounts");
const createAccountsHandler = require("../handlers/create-accounts");
const updateAccountsHandler = require("../handlers/update-accounts");

router.get("/v1/accounts", getAccountsHandler);
router.get("/v1/accounts/id", getByIdAccountsHandler);
router.put("/v1/accounts", updateAccountsHandler);
router.post("/v1/accounts", createAccountsHandler);

module.exports = router;
