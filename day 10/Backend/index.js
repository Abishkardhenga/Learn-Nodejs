const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const UserDb = require("./utilis/db");
const ProductDetail = require("./Model/ProductModel");
const movieDetail = require("./Model/MoviesModel");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "DELETE", "POST", "HEAD"],
    credential: true,
  })
);

UserDb();
ProductDetail();
movieDetail();
app.use(require("./routes"));

app.listen(8000, () => {
  console.log(`server starting on port `);
});
