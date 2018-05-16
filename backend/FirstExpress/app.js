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

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
