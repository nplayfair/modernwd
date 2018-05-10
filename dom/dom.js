var h1 = document.querySelector("h1");
h1.style.color = "red";
var paragraph = document.querySelector("#buttonstatus");

document.querySelector("button").addEventListener("click", function() {
  paragraph.textContent = "Somebody clicked!";
});
