//Check off specific todo by clicking
$("li").on("click", function() {
  //if li is gray
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    //turn it black
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  }
  else {
    //Strike out and gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
