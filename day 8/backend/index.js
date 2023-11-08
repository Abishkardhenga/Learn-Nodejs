const express = require("express");
const app = express();
app.use(require("./routes"));

app.listen(8000, () => {
  console.log("started at port 8000");
});
