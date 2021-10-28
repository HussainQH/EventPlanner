const express = require("express");
const app = express();
const connectDb = require("./database");
const eventRouters = require("./apis/events/routes");
const { logger } = require("./middleware/logger");
const { errorHandler } = require("./middleware/errorHandler");
const { pathFinder } = require("./middleware/pathFinder");

app.use(express.json());
app.use(logger);
app.use(pathFinder);
app.use(errorHandler);
app.use("/api/events", eventRouters);

connectDb();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
