const { todaAdminRepositories } = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const { body, query } = req;
    const test = await todaAdminRepositories.update(query.admin_id, body);
    let setParams = `username="${body.username}" AND  admin_id !="${query.admin_id}" `;
    let checkExist = await todaAdminRepositories.selectFilter(setParams);
    if (checkExist.length > 0)
      return res.status(409).send({ message: "Username is already exist" });
    res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
