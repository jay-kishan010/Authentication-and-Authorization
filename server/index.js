const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

const { MONGO_URL, PORT } = process.env;

mongoose.connect(MONGO_URL)
.then((result) => {
    console.log("server connected");
}).catch((err) => {
    console.error(err);
});

app.listen(PORT,(req,res)=>{
    console.log('server is running');
})

app.use(
    cors({
      origin: ["http://localhost:4000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  

  app.use(express.json()); 
//   express.json(): The express.json() will add a body property 
// to the request or req object. 
// This includes the request body's parsed JSON data. 
// req.body in your route handler function 
// will allow you to access this data.