const express = require("express");
const router = express.Router();
// Create an Express application

const setAccountsHandler = require("../handlers/set-accounts");
const adminLoginAccountsHandler = require("../handlers/login-super-admin");

router.get("/v1/superAdminSet", setAccountsHandler);
router.post("/v1/superAdminLogin", adminLoginAccountsHandler);

module.exports = router;
