const express = require("express");
const app = express();
app.use(express.json());

app.use(require("./routes"));

app.listen(8000, () => {
  console.log("server started at port 8000");
});
