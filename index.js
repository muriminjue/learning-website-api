//modules
const  express = require("express");
const sequelize = require("sequelize");
const dotenv = require('dotenv')
var path = require('path');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const methodOverride = require('method-override')

//environment variables
dotenv.config();

//pages and functions
const admin = require("./routes/adminroutes");
const api1 = require("./routes/apiroutes");
var db = require("./models");
var PORT =  process.env.PORT


//init app
var app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//static
app.use(express.static("public"));
app.use(methodOverride('_method'))

//use json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// creating 24 hours from milliseconds
const oneHour = 1000 * 60 * 60 ;

//session middleware
app.use(sessions({
    secret: process.env.SECRET,
    saveUninitialized:true,
    cookie: { maxAge: oneHour },
    resave: false
}));

app.use(cookieParser());

app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});
//routes
app.use("/api", api1);
app.use("/", admin);

//start server process.env.PORT
app.listen(PORT, async function () {
  console.log("server started on port " + PORT);
  await db.sequelize.authenticate();
  console.log("Database connected!");
});