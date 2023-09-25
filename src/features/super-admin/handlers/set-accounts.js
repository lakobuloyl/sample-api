const { hashPasswords, comparePass } = require("../../../service/auth/bcrypt");
const {
  superAdminRepositories,
} = require("../../../service/repositories/index");


module.exports = async function (req, res) {
  try {

    const admin = {
      username: "superadmin",
      password: "admin123"
    }
    admin.password= await hashPasswords(admin.password);
    await superAdminRepositories.save(admin);
    res.send({});
  } catch (error) {
    console.log("errr", error);
    res.status(500).send({ message: error });
  }
};
