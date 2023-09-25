const mysqlConnection = require("../../../config");

module.exports.toda = {
  save: async (params) => {
    let sqlString = `
        INSERT INTO
        tbl_toda
        (
            toda_name,
            toda_desc,
            toda_brgy,
            toda_city,
            toda_province
        )values(
            "${params.toda_name}", 
            "${params.toda_desc}"
            "${params.toda_brgy}"
            "${params.toda_city}"
            "${params.toda_province}"
        )
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
  selectAll: async (params) => {
    let result = await mysqlConnection.query("select * from tbl_toda");
    return result[0];
  },
  selectById: async (params) => {
    let result = await mysqlConnection.query(
      `select * from tbl_toda where toda_id="${params}"`
    );
    return result[0];
  },
  update: async (params, body) => {
    let sqlString = `
        update
        tbl_toda
        set
            toda_name ="${body.toda_name}",
            toda_desc ="${body.toda_desc}",
            toda_brgy ="${body.toda_brgy}",
            toda_city ="${body.toda_city}",
            toda_province ="${body.toda_province}"
        where
            toda_id ="${params}"
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
};
