const { userRepositories } = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { body } = req;
    await userRepositories.save({
      name: body.name,
    });
    res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
