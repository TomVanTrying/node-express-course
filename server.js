
//  MOCK DATA 
const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]



// Search node modules for "express"
const express = require('express');

// creates instance of express 
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// words with colons in front of them in url are treated as variables 
// (ie :id)
// GET 
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

// POST 
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})


// Start up server locally on the port 
app.listen(8002,function(){
    console.log("server is running")
    })

