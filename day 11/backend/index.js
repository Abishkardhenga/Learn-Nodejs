const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./utlilis/db");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
  })
);

db();

app.use(require("./Routes"));

app.listen(8000, () => {
  console.log(`server starting on port  on 8000`);
});
