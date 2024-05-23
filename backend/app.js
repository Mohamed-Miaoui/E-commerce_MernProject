var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer")
const path = require("path")
const cors = require("cors")


//dummy routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//dummy routes
app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;
