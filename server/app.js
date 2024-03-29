const express = require('express')
const mongoose = require('mongoose')
const connect=require('./db/connect')
const User=require('./model/userSchema')

const app = express()
app.use(express.json())

require('dotenv').config({path:"./config.env"})

const PORT=process.env.PORT
console.log(PORT)


mongoose.set('strictQuery', true)

app.use(require('./router/auth'))


//this is middleware 
const middleWare = (req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
  setTimeout(next, 1000)
}

// app.get('/', middleWare, function (req, res) {
//   res.send('Hello World from the server')
// })

// app.get('/about', middleWare, function (req, res) {
//   res.send('This is about page from the server')
// })

// app.get('/contact', middleWare, function (req, res) {
//   res.send('This is contact page from the server')
// })

// app.get('/signup', middleWare, function (req, res) {
//   res.send('This is signup page from the server')
// })

// app.get('/login', middleWare, (req, res) => {
//   res.send('This is login page from the server')
// })

console.log("Server connection is tested")

app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`)
})