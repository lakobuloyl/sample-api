const mysqlConnection = require("../../../config");

module.exports.superAdmin = {
  save: async (params) => {
    let sqlString = `
        INSERT INTO
         admin
        (
            username,
            password
        )values(
            v, 
            "${params.password}"
        )
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
  selectUserName: async (params) => {
    let result = await mysqlConnection.query(
      `select * from admin where username="${params.username}" `
    );
    return result[0];
  },

};
