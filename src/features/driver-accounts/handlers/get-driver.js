const {
  todaDriverRepositories,
} = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    let getDriver = await todaDriverRepositories.selectFilter("");
    res.send(getDriver);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
