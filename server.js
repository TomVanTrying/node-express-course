// Search node modules for "express"
const express = require('express');

// creates instance of express 
const app = express();

// words with colons in front of them in url are treated as variables 
// (ie :id)
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

// Start up server locally on the port 
app.listen(8002,function(){
    console.log("server is running")
    })

