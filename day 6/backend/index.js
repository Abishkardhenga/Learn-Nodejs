const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(require("./Routes"));

app.listen(port, () => {
  console.log("server started at port 8000");
});
