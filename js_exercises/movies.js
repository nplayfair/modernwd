var movies = [
  {title: "Melancholia", watched: true, rating: 4},
  {title: "Robocop", watched: true, rating: 4.5},
  {title: "Lord of The Rings: Two Towers", watched: false, rating: 4},
  {title: "Avengers Infinity War", watched: false, rating: 3.5}
];

movies.forEach(function(movie) {
  var result = "You have ";
  if (movie.watched == true) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - " + movie.rating + " stars.";
  console.log(result);
});
