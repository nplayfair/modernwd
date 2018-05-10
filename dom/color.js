var btn = document.querySelector("button");
var isPurple = false;

btn.addEventListener("click", function() {
  if (!isPurple) {
    document.querySelector("body").style.background = "purple";
    isPurple = true;
  }
  else {
    document.querySelector("body").style.background = "white";
    isPurple = false;
  }
});
