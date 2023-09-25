const { todaTerminalRepositories } = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { query, body } = req;
    const test = await todaTerminalRepositories.update(query.terminal_id, body);
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
