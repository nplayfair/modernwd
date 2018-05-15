//Check off specific todo by clicking
$("li").on("click", function() {
  $(this).toggleClass("completed");
});

//Delete item by clicked the delete button
$("li span").on("click", function(event) {
  //Remove the parent li
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //Stop event from propagating up the DOM
  event.stopPropagation();
});
