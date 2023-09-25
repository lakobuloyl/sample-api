const { decodeToken } = require("../../../service/jwt/jwt");
const {
  todaDriverRepositories,
} = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
      const { headers } = req;
    let tokenDecode = await decodeToken(headers.authorization);
    let getDriver = await todaDriverRepositories.selectFilter(
      ` where driver_id="${tokenDecode.driver_id}"`
    );
    res.send(getDriver[0]);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
