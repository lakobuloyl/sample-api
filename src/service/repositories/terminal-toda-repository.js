const mysqlConnection = require("../../../config");

module.exports.todaTerminal = {
  save: async (params) => {
    let sqlString = `
        INSERT INTO
         tbl_terminal
        (
            terminal_name,
            terminal_address,
            terminal_long,
            terminal_lat,
            toda_id
        )values(
            "${params.terminal_name}", 
            "${params.terminal_address}",
            "${params.terminal_long}",
            "${params.terminal_lat}",
            "${params.toda_id}"
        )
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
  selectAll: async (params) => {
    let result = await mysqlConnection.query("select * from tbl_terminal");
    return result[0];
  },
  selectById: async (params) => {
    let result = await mysqlConnection.query(
      `select * from tbl_terminal where terminal_id="${params}"`
    );
    return result[0];
  },
  update: async (params, body) => {
    let sqlString = `
        update
        tbl_terminal
        set
            terminal_name ="${body.terminal_name}",
            terminal_address ="${body.terminal_address}",
            terminal_long ="${body.terminal_long}",
            terminal_lat ="${body.terminal_lat}",
            toda_id ="${body.toda_id}"
        where
            terminal_id ="${params}"
        `;
    await mysqlConnection.query(sqlString);
    return {};
  },
};
