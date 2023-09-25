const { comparePass } = require("../../../service/auth/bcrypt");
const { generateAppAccessToken,  } = require("../../../service/jwt/jwt");
const {
  todaAdminRepositories,
} = require("../../../service/repositories/index");


module.exports = async function (req, res) {
  try {
    const { body } = req
    
    let setParams = ` username="${body.username}"`;
    let getAdmin = await todaAdminRepositories.selectFilter(setParams);
    let passwordCompare = await comparePass(
      body.password,
      getAdmin[0].password
    );
    if (!passwordCompare) return res.status(309).send({ message: "Password or Email is Incorrect" });
    let setToken = {
      username: getAdmin[0].username,
      access: "tbl_toda_admin",
    };
    
    let accessToken = await generateAppAccessToken(setToken);

      res.send({ "x-access-token": accessToken });
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
