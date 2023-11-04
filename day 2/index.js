const express = require("express");
const userDetail = require("./data");

const app = express();

app.listen(8000, () => {
  console.log("port started at 8000 port ");
});

app.get("/username", (req, res) => {
  res.json(userDetail);
});
