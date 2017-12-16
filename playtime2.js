
var listItems = getElementsByClassName("list-items");
//then change classList to whatever, instead of relying on hover
listItems.addEventListener('click' function(){
  var image = document.getElementById("box");
  image.classList("expand");
});
//change css so that :hover is replaced with .expand
