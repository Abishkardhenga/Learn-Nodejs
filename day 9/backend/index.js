const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
  })
);

require("./utils/db")();

app.use(require("./routes"));

app.listen(port, () => {
  console.log("getting started in 8000 port");
});
