const { decodeToken } = require("../../../service/jwt/jwt");
const {
  todaAdminRepositories,
} = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const { headers } = req;
    let decoded = decodeToken(headers.authorization);
    let test = await todaAdminRepositories.selectById(decoded.admin_id);

    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
