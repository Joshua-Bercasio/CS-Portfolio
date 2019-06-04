var make = document.getElementById("make");
make.style.position = "absolute";

var kill = false;
var bongocat = document.getElementById("bongocat");
var gnome = document.getElementById("gnome")

bongocat.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('data:image/png;base64,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')";
}
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";

    }
    
});
gnome.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/EaqJgQOVZ9k/hqdefault.jpg')";}
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";
    }
});
make.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/newsfeed/000/349/786/238.jpg')";}
    
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";
    }
});
function myFunction() {
  document.body.style.backgroundRepeat = "no-repeat";
}
window.addEventListener("resize", myFunction);


make.addEventListener("mousemove", function(){
    make.style.top = Math.random() * 1080 + "px";
    make.style.right = Math.random() * 1920 + "px";
    make.style.bottom = Math.random() * 1080 + "px";
    make.style.left = Math.random() * 1920 + "px";
})