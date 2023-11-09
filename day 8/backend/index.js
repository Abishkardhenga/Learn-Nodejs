const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(require("./routes"));
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "HEAD", "POST", "DELETE"],
    credentials: true,
  })
);

app.listen(8000, () => {
  console.log("started at port 8000");
});
