var express = require("express");
var app = express();

//root route
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment.");
});

app.get("/speak/:animal", function(req, res) {

  //Better method of doing it, dictionary
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof woof!",
    cat: "Meow"
  }
  //Animal sounds
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  res.send("The " + animal + " says \"" + sound + "\"");

  /*
  //Switch statement
  switch(animal) {
    case "pig":
    {
      res.send("Oink");
      break;
    }
    case "cow":
    {
      res.send("Moo");
      break;
    }
    case "dog":
    {
      res.send("Woof woof!");
      break;
    }
    default:
    {
      res.send("Page not found");
    }
  }
  */
});

app.get("/repeat/:word/:num", function(req, res) {
  //repeat words
  var word = req.params.word;
  var numRepeats = Number(req.params.num);
  var output = "";

  for (var i = 0; i < numRepeats; i++) {
    output += word + " ";
  }
  res.send(output);
});

//* route
app.get("*", function(req, res) {
  res.send("Page not found");
});


//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
