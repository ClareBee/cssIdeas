

var drop = document.getElementById("accountbtn");
drop.addEventListener("mouseover", function(){
  //toggle is really nifty - we could use this for the list functionality as well
    document.getElementById("myDropdown").classList.toggle("show");
});

var dropdowncontent = document.getElementById("myDropdown");
  dropdowncontent.addEventListener("mouseout", function(){
  document.getElementById("myDropdown").classList.toggle("show");
});
