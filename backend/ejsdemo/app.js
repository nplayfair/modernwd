var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  //res.send("<h1>Welcome to the homepage</h1>");
  res.render("home");
});

app.get("/sayhelloto/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("sayhello", {thingVar: thing}); //pass var to template
});

app.get("/posts", function(req, res) {
  //Define array of posts
  var posts = [
    {title: "Nottingham", author: "Nick"},
    {title: "Founding Apple", author: "Steve"},
    {title: "World Tour", author: "Ashley"}
  ];

  res.render("posts", {posts: posts}); //pass array of posts to view
});

//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
