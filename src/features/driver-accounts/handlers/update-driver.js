const { hashPasswords } = require("../../../service/auth/bcrypt");
const {
  todaDriverRepositories,
} = require("../../../service/repositories/index");

module.exports = async function (req, res) {
  try {
    const { body, query } = req;
    body.password = await hashPasswords(body.password);
    let setParams = ` where username="${body.username}" AND driver_id != "${query.driver_id}"`;
    let validateUserName = await todaDriverRepositories.selectFilter(setParams);
    if (validateUserName.length > 0)
      return res.status(409).send({ message: "Username is already exist" });
    await todaDriverRepositories.update(query.driver_id,body);
    res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
