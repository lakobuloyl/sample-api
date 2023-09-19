const { userRepositories } = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    let test = await userRepositories.find({});
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
