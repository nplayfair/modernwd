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
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
  secret: "For your Eyes Only",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Encode and decode data for session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ======================
// ROUTES
// ======================

app.get("/", function(req,res) {
  res.render("home");
});

app.get("/secret", function(req,res) {
  res.render("secret");
});

// Show signup form
app.get("/register", function(req, res) {
  res.render("register");
})

//Handle user signup
app.post("/register", function(req, res) {
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}),
    req.body.password, function(err, user) {
      if(err) {
        console.log(err);
        res.render("register");
      }
      else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secret");
        });
      }
    });
});


//Tell express to listen for requests
app.listen(3000, function(){
  console.log("Server started.");
});
