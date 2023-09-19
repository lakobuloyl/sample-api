const userModel = require("../models/user-schema");

module.exports.User = {
  save: async (params) => {
    let userParams = new userModel(params);
    await userParams.save(params);
    return {};
  },
  find: async (params) => {
    return await userModel
      .find(params)
      .then(function (user) {
        return user;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  finById: async (params) => {
    return await userModel
      .findById(params)
      .then(function (user) {
        return user;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  update: async (params, body) => {
    await userModel
      .updateOne(params, {
        $set: body,
      })
      .then(function (user) {
        return user;
      })
      .catch(function (err) {
        console.log(err);
      });
    return {};
  },
  delete: async (params) => {
    await userModel
      .deleteOne(params)
      .then(function (user) {
        return user;
      })
      .catch(function (err) {
        console.log(err);
      });
    return {};
  },
};
