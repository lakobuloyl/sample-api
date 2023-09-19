// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
// });


// const userModel = mongoose.model("user", userSchema);

module.exports = async function (req, res) {
    try {
        // testUser = new userModel({
        //   name:"test2 "
        // })
        // testUser.save()
    // let test = await userModel.find({}).then(function (user) {
    //     return user
    // }).catch(function(err){
    //     console.log(err);
    // });
    //     console.log(test);
    res.send({  });
  } catch (error) {
    console.log("errr", error);
    // res.send(500, { code: "ResponseStatusFailed", message: error });
  }
};
