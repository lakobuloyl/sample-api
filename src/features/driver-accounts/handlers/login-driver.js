const { comparePass } = require("../../../service/auth/bcrypt");
const { generateAppAccessToken,  } = require("../../../service/jwt/jwt");
const {
  todaDriverRepositories,
} = require("../../../service/repositories/index");


module.exports = async function (req, res) {
  try {
    const { body } = req
    
    let setParams = ` where username="${body.username}"`;
    let getDriver = await todaDriverRepositories.selectFilter(setParams);

    if (getDriver.length <= 0)
      return res.status(309).send({ message: "Username is Incorrect" });
    let passwordCompare = await comparePass(
      body.password,
      getDriver[0].password
    );
    if (!passwordCompare) return res.status(309).send({ message: "Password is Incorrect" });
    let setToken = {
      driver_id: getDriver[0].driver_id,
      username: getDriver[0].username,
      access: "tbl_driver",
    };
    
    let accessToken = await generateAppAccessToken(setToken);

      res.send({ "x-access-token": accessToken });
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
