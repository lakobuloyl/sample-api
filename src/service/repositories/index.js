module.exports = {
  userRepositories: require("./user-repository").User,
  todaRepositories: require("./toda-repository").toda,
  todaAdminRepositories: require("./admin-toda-repository").todaAdmin,
  todaTerminalRepositories: require("./terminal-toda-repository").todaTerminal,
  superAdminRepositories: require("./superadmin-repository").superAdmin,
  todaDriverRepositories: require("./driver-toda-repository").todaDriver,
};