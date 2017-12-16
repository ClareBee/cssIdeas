

var drop = document.getElementById("accountbtn");
drop.addEventListener("mouseover", function(){
  //toggle is really nifty - we could use this for the list functionality as well
    document.getElementById("myDropdown").classList.toggle("show");
});

var dropdowncontent = document.getElementById("myDropdown");
  dropdowncontent.addEventListener("mouseout", function(){
  document.getElementById("myDropdown").classList.toggle("show");
});

//closes when user clicks somewhere else
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdownbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
