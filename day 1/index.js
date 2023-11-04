const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const app = express();

// app.use(morgan("dev"));

//routes
app.use(router);

app.listen(8000, () => console.log("server started at port 8000"));
