const express = require("express");
const app = express();
const connectDb = require("./database");
app.use(express.json());

connectDb();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
