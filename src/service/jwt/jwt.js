const jwt = require("jsonwebtoken");
const mysqlConnection = require("../../../config");


exports.generateAppAccessToken = (payload) => {
  let key = "dsds";
  return jwt.sign(payload, key, { expiresIn: "365d" });
};
exports.decodeToken = (payload) => {
  return (decoded = jwt.verify(payload, "dsds"));
};


exports.validateToken = (req, res, next) => {
  const token = req.header("Authorization"); // Assuming the token is sent in the 'Authorization' header
  if (!token) {
    return res.json({ message: "Authentication failed. Token missing." });
  }
  try {
    const decoded = jwt.verify(token, "dsds"); // Replace with your actual secret key
      req.user = decoded; // You can access the token payload in your route handlers as req.user
       mysqlConnection.query(`select * from ${decoded.access} where username="${decoded.username}"`)
        .then((data) => {
          if (data.length <= 0)
            return res.json({
              message: "Authentication failed. Invalid token.",
            });
        }).catch(err => {
            return res.json({ message: "Authentication failed. Invalid token." });
        });

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.json({ message: "Authentication failed. Invalid token." });
  }
};
