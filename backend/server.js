const express = require("express");
const cors = require("cors");
const db = require("./src/database.js");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3100, () => {
  console.log("server runnig on port 3100");
});
