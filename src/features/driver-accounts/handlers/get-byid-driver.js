const {
  todaDriverRepositories,
} = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const {query } = req
    let getDriver = await todaDriverRepositories.selectFilter(
      ` where driver_id="${query.driver_id}"`
    );
    res.send(getDriver[0]);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
