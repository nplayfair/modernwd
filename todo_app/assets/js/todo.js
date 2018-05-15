//Check off specific todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Delete item by clicked the delete button
$("ul").on("click", "span", function(event) {
  //Remove the parent li
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //Stop event from propagating up the DOM
  event.stopPropagation();
});

//Add new item when typed into the input and enter is pressed
$("input[type='text']").keypress(function(event) {
  //Has enter been pressed?
  if (event.which === 13) {
    //Get value of textbox
    var todoText = $(this).val();
    //Clear textbox
    $(this).val("");
    //Create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});
