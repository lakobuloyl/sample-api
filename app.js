const express = require("express");

// Create an Express application
const app = express();

app.use(express.json())
// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.status(200).send({hello:"Hello, World!"});
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
