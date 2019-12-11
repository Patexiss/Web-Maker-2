// import express library
const express = require("express");
const path = require ("path");
const app = express();
const connectDB = require("./config/db");
 
// Connect DB
connectDB();


// init express
const app = express();

// create a server listening at local host:3100
app.listen(3100, () => {
  console.log("Server started on port 3100");
});
app.use(express.json)