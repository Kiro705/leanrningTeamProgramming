const express = require('express')
const api = express.Router()
const User = require('../db/models.js')

api.get('/user', function(req, res , next){
	User.findAll()
	.then(result => res.json(result))
	.catch(next)
})
