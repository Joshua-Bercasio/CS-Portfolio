var newbgcolor = document.getElementById("newbgcolor");
var colorchangebutton = document.getElementById("colorchangebutton");
colorchangebutton.addEventListener("click", function (){
    document.body.style.backgroundColor = newbgcolor.value;
})
//type red,blue, green, etc = enter