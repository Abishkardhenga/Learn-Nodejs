const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "HEAD", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(require("./routes"));

app.listen(port, () => {
  console.log("listening on port on 8000");
});
