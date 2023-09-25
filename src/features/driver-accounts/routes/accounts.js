const express = require("express");
const router = express.Router();
// Create an Express application
const { validateToken } = require("../../../service/jwt/jwt");

const getDriverAccountsHandler = require("../handlers/get-driver");
const getByIdDriverAccountsHandler = require("../handlers/get-byid-driver");
const createDriverAccountsHandler = require("../handlers/create-driver");
const updateDriverAccountsHandler = require("../handlers/update-driver");

router.get("/v1/driver", validateToken, getDriverAccountsHandler);
router.get("/v1/driver/id", validateToken, getByIdDriverAccountsHandler);
router.put("/v1/driver", validateToken, updateDriverAccountsHandler);
router.post("/v1/driver", validateToken, createDriverAccountsHandler);

git 
const loginDriverAccountsHandler = require("../handlers/login-driver");
const profileDriverAccountsHandler = require("../handlers/driver-profile");

router.post("/v1/loginDriver", loginDriverAccountsHandler);
router.get("/v1/driverProfile",validateToken, profileDriverAccountsHandler);


module.exports = router;
