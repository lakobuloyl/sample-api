const express = require("express");
const router = express.Router();

const { validateToken } = require("../../../service/jwt/jwt");

const getAccountsHandler = require("../handlers/get-accounts");
const getByIdAccountsHandler = require("../handlers/get-byid-accounts");
const createAccountsHandler = require("../handlers/create-accounts");
const updateAccountsHandler = require("../handlers/update-accounts");
router.get("/v1/adminAccounts", validateToken, getAccountsHandler);
router.get(
  "/v1/adminAccounts/id",
  validateToken,
  getByIdAccountsHandler
);
router.put("/v1/adminAccounts", validateToken, updateAccountsHandler);
router.post(
  "/v1/adminAccounts",
  validateToken,
  createAccountsHandler
);


const todaAdminLoginAccountsHandler = require("../handlers/login-admin");
const todaAdminProfileAccountsHandler = require("../handlers/get-admin-profile-accounts");
router.post(
  "/v1/adminLogin",
  todaAdminLoginAccountsHandler
);
router.get("/v1/adminProfile",validateToken, todaAdminProfileAccountsHandler);
module.exports = router;
