const { comparePass } = require("../../../service/auth/bcrypt");
const { generateAppAccessToken, validateSuperAdminAppToken,  } = require("../../../service/jwt/jwt");
const {
  superAdminRepositories,
} = require("../../../service/repositories/index");


module.exports = async function (req, res) {
  try {
    const { body } = req
    
    let admin = await superAdminRepositories.selectUserName(body);
    let passwordCompare = await comparePass(body.password, admin[0].password)
    if (!passwordCompare) return res.status(309).send({ message: "Password or Email is Incorrect" });
    let accessToken = await generateAppAccessToken(admin[0]);

      res.send({ "x-access-token": accessToken });
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
