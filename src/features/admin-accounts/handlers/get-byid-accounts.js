const {
  todaAdminRepositories,
} = require("../../../service/repositories/index");
module.exports = async function (req, res) {
  try {
    const { query } = req;
    let test = await todaAdminRepositories.selectById(query.admin_id);
    res.send(test);
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ code: "ResponseStatusFailed", message: error });
  }
};
