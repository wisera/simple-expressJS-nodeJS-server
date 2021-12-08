// Exercise //
// 1 //
// Create a npm project and install Express.js (Nodemon if you want)
// 2 //
// Create an Express.js app which funnels the request through 2 middleware functions
// that log something to the console and return one response
// 3 //
// Handle request to "/" and "/users" such that each request only has one handler/ middleware that does something w/ it 
// (e.g. send dummy response)

const express = require('express') // express module

const app = express() // the express module is executed as a function

app.listen(5000) // this express method creates a server and sets a port, like const server = http.createServer() then server.listen() 

app.use('/users', (req, res, next) => {
    console.log('second middleware')
    res.send('<h1>oi</h1>') // send is like .write() method it sends a response
})

app.use('/', (req, res, next) => { // use method allows you to use middleware functions
    console.log('first middleware')
    res.send('You are on index page')
//    next() // alows for the next middleware to be executed
})
