const { hashPasswords } = require("../../../service/auth/bcrypt");
const {
  todaAdminRepositories
} = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { body } = req;
    body.password = await hashPasswords(body.password);
    let setParams = `username="${body.username}"`
    let checkExist = await todaAdminRepositories.selectFilter(setParams);
    if (checkExist.length > 0) return res.status(409).send({ message :"Username is already exist"});
      await todaAdminRepositories.save(body);
      res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
