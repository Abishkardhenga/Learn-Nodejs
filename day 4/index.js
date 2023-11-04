const express = require("express");
const { route } = require("./routes");
// importing the express module
const app = express();
// calling the express

app.use(express.json());

app.use(require("./routes"));

app.listen(8000, () => {
  console.log("started server at 8000 port ");
});
