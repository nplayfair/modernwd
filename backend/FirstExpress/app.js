var express = require("express");
var app = express();

// "/" => Hi
app.get("/", function(req, res) {
  res.send("Hi there!");
});

// "/bye" => Goodbye
app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

// "/dog" => woof
app.get("/dog", function(req, res){
  res.send("Woof!");
});

//Reddit style example
app.get("/r/:subredditName", function(req, res) {
  // can combine ie /r/:subReddit/comments/:id/:title
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit + " subreddit");
});
//*
app.get("*", function(req, res) {
  res.send("You are a star!");
});

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
