var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");

//Connect to db
mongoose.connect("mongodb://127.0.0.1:27017/authdemo", {useNewUrlParser: true});

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req,res) {
  res.render("home");
});

app.get("/secret", function(req,res) {
  res.render("secret");
});

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
