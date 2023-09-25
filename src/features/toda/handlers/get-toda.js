const { todaRepositories } = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    
    const test = await todaRepositories.selectAll()
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
