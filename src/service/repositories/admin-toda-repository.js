const mysqlConnection = require("../../../config");

module.exports.todaAdmin = {
  save: async (params) => {
    let sqlString = `
        INSERT INTO
         tbl_toda_admin
        (
            admin_firstname,
            admin_lastname,
            admin_contact_no,
            admin_img,
            toda_id,
            username,
            password
        )values(
            "${params.admin_firstname}", 
            "${params.admin_lastname}",
            "${params.admin_contact_no}",
            "${params.admin_img}",
            "${params.toda_id}",
            "${params.username}",
            "${params.password}"
        )
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
  selectAll: async (params) => {
    let result = await mysqlConnection.query("select * from tbl_toda_admin");
    return result[0];
  },
  selectFilter: async (params) => {
    let result = await mysqlConnection.query(
      `select * from tbl_toda_admin where ` + params
    );
    return result[0];
  },
  selectById: async (params) => {
    let result = await mysqlConnection.query(
      `select * from tbl_toda_admin where admin_id="${params}"`
    );
    return result[0];
  },
  update: async (params, body) => {
    let sqlString = `
        update
        tbl_toda_admin
        set
            admin_firstname ="${body.admin_firstname}",
            admin_lastname ="${body.admin_lastname}",
            admin_contact_no ="${body.admin_contact_no}",
            admin_img ="${body.admin_img}",
            toda_id ="${body.toda_id}"
        where
            admin_id ="${params}"
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
};
