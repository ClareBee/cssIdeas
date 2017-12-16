var acc = document.getElementsByClassName("header");
var i;
var shown = document.querySelector('p')

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(s) {
      var content  = this.nextElementSibling;
      console.log("hello");
      content.classList.toggle("panel");
      var rect = shown.getBoundingClientRect();
      console.log(rect.top, rect.right, rect.bottom, rect.left);
      window.scrollTo(0, rect.right);
});
}
