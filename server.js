// Search node modules for "express"
const express = require('express');

// creates instance of express 
const app = express();

// Start up server locally on the port 
app.listen(8002,function(){
    console.log("server is running")
    })