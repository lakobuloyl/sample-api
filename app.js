require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

app.use(express.json());
// mongoose.connect(
//   "mongodb+srv://jsaraba57:D29uk6d2sRjHx89g@cluster0.vxwlj66.mongodb.net/todaDb?retryWrites=true&w=majority"
// );
// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.status(200).send( { msg: "Welcome  new API" });
});

const UserRoutes = require("./src/features/accounts/routes/accounts");
const todaRoutes = require("./src/features/toda/routes/toda");
const todaAdminRoutes = require("./src/features/admin-accounts/routes/accounts");
const todaTerminalRoutes = require("./src/features/toda-terminal/routes/terminal");
const terminalRoutes = require("./src/features/super-admin/routes/accounts");
const driverRoutes = require("./src/features/driver-accounts/routes/accounts");
app.use(UserRoutes);
app.use(todaRoutes);
app.use(todaAdminRoutes);
app.use(todaTerminalRoutes);
app.use(terminalRoutes);
app.use(driverRoutes);
