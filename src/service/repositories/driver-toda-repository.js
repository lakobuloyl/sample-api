const mysqlConnection = require("../../../config");

module.exports.todaDriver = {
  save: async (params) => {
    let sqlString = `
        INSERT INTO
         tbl_driver
        (
            firstname,
            lastname,
            contact_no,
            img,
            address,
            age,
            birthday,
            driver_license,
            plate_number,
            franchise_no,
            register_number,
            or_cr,
            username,
            password,
            toda_id
        )values(
            "${params.firstname}", 
            "${params.lastname}",
            "${params.contact_no}",
            "${params.img}",
            "${params.address}",
            "${params.age}",
            "${params.birthday}",
            "${params.driver_license}",
            "${params.plate_number}",
            "${params.franchise_no}",
            "${params.register_number}",
            "${params.or_cr}",

            "${params.username}",
            "${params.password}",                                   
            "${params.toda_id}"
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
      `select * from tbl_driver` + params
    );
    return result[0];
  },
  selectById: async (params) => {
    let result = await mysqlConnection.query(
      `select * from tbl_driver where admin_id="${params}"`
    );
    return result[0];
  },
  update: async (params, body) => {
    let sqlString = `
        update
        tbl_driver
        set
            firstname ="${body.firstname}",
            lastname ="${body.lastname}",
            contact_no ="${body.contact_no}",
            img ="${body.img}",
            address ="${body.address}",
            age ="${body.age}",
            birthday ="${body.birthday}",
            driver_license ="${body.driver_license}",
            plate_number ="${body.plate_number}",
            franchise_no ="${body.franchise_no}",
            register_number ="${body.register_number}",
            or_cr ="${body.or_cr}",

            username ="${body.username}",
            password ="${body.password}",
            toda_id ="${body.toda_id}"
        where
            driver_id ="${params}"
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
};
