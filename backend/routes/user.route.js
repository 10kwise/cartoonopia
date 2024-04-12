const express = require('express');
const routor = express.Router();
const {loginuser, register, createchar, getaddcharpage} = require('../controllers/user.controller');

routor.post('/login',loginuser);
routor.post('/register',register);
routor.get('/addcharpage',getaddcharpage);
routor.post('/addchar',createchar);






module.exports = routor;
