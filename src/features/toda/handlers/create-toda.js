const { todaRepositories } = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { body } = req
    const test = await todaRepositories.save(body);
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
