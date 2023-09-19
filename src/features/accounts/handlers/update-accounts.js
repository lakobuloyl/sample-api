const { userRepositories } = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const { body, query } = req;
    await userRepositories.update(
      { _id: query.userId },
      {
        name: body.name,
      }
    );
    res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
