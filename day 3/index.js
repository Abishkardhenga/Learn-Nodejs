const express = require("express");
// import the express
const app = express();
app.use(express.json());

// it is like middle ware help to access incoming data that is send 
//  by client in json format
// this middleware will automatically parse the JSON data in the request body and make it available as a JavaScript object on req.body for your route handlers to access.

app.use(require("./routes"));

// it is refeering to route page

app.listen(8000, () => {
  console.log("server started at port 8000");
});

//start the server at port 8000
