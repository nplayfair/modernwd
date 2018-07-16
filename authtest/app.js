var express =  require("express");
var mongoose =  require("mongoose");
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
