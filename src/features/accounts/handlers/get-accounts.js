const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});


const userModel = mongoose.model("user", userSchema);

module.exports = async function (req, res) {
    try {

    let test = await userModel.find({}).then(function (user) {
        return user
    }).catch(function(err){
        console.log(err);
    });
        console.log(test);
    res.send({ test });
  } catch (error) {
    console.log("errr", error);
    // res.send(500, { code: "ResponseStatusFailed", message: error });
  }
};
