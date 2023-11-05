const express = require("express");
const { checkApiKey, checkMethod } = require("./middleware");
const app = express();
const port = 8000;
app.use(express.json());
app.use(checkMethod);
app.use(checkApiKey);
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
