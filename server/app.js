const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./api')

//Middleware
app.use(morgan)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//Routes
app.use('/api', routes)

app.listen(7777, function(){
	console.log('I am listening on 7777')
})

// snake___________case___________|||i