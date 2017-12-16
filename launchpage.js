var app = function() {
  console.log("Running app");

var yes = document.getElementById("yes");
yes.addEventListener("click", function(){
  console.log("connected");
  var popup = document.getElementById("popup");
  popup.style.zIndex = -1;
  var foreground = document.getElementById("foreground");
  foreground.classList = "vanish";
});

};
window.addEventListener("load", app);
