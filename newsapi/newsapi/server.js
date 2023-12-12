const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors")
const newsRoutes = require("./newsRouter/newsRouter");
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/api/v1", newsRoutes);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
module.exports = app;