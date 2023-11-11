const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
  console.log("getting started in 8000 port");
});
