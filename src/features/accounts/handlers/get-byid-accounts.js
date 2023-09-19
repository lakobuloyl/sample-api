const { userRepositories } = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const { query } = req;
    let test = await userRepositories.finById({ _id: query.userId });
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
