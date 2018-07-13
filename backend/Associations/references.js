var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog_demo_2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   email: "bob@bob.com",
//   name: "Bob"
// });

// Post.create({
//   title: "How to cook the best burger pt. 2",
//   content: "I will not reveal my secrets!"
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
