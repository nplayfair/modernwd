//Check off specific todo by clicking
$("li").on("click", function() {
  $(this).toggleClass("completed");
});
