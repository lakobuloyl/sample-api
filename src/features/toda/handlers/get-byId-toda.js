const { todaRepositories } = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { query } = req;
    const test = await todaRepositories.selectById(query.toda_id);
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
