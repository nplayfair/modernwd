var express = require("express");
var app = express();

app.get("/", function(req, res) {
  //res.send("<h1>Welcome to the homepage</h1>");
  res.render("home.ejs");
});

app.get("/sayhelloto/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("sayhello.ejs", {thingVar: thing}); //pass var to template
});

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
