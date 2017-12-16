var acc = document.getElementsByClassName("header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var content  = this.nextElementSibling;
      console.log("hello");
      content.classList.toggle("panel");
    });
};
