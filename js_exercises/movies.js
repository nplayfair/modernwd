var movies = [
  {title: "Melancholia", watched: true, rating: 4},
  {title: "Robocop", watched: true, rating: 4.5},
  {title: "Lord of The Rings: Two Towers", watched: false, rating: 4},
  {title: "Avengers Infinity War", watched: false, rating: 3.5}
];

movies.forEach(function(movie) {
  if (movie.watched == true) {
    console.log("You have watched " + movie.title + " - " + movie.rating + " stars.");
  }
  else
  {
    console.log("You have not seen " +  movie.title + " - " + movie.rating + " stars.");
  }
});
