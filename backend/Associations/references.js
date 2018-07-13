var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_2", {useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);

// User.create({
//   email: "bob@bob.com",
//   name: "Bob"
// });

// Post.create({
//   title: "How to cook the best hotdog",
//   content: "Fresh buns"
// }, function(err, post) {
//   User.findOne({email: "bob@bob.com"}, function(err, foundUser){
//     if(err) {
//       console.log(err);
//     }
//     else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data) {
//         if(err) {
//           console.log(err);
//         }
//         else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

User.findOne({email: "bob@bob.com"}).populate("posts").exec(function(err, user){
  if(err) {
    console.log(err);
  }
  else {
    console.log(user);
  }
});
