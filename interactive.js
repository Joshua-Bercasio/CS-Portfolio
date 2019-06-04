var num1 = document.getElementById("num1");

var operator = document.getElementById("operator");

var num2 = document.getElementById("num2");

var clickyboi =document.getElementById("clickyboi");

var display = document.getElementById("display");

var mane = document.getElementById("mane");

var gnome = document.getElementById("gnome");

var make = document.getElementById("make");

var music = document.getElementById("music");

var pews = document.getElementById("pews");

var mac = document.getElementById("mac");

var newbgcolor = document.getElementById("newbgcolor");

var colorchangebutton = document.getElementById("colorchangebutton");

var apex = document.getElementById("apex");

var poki = document.getElementById("poki");

var bruh = document.getElementById("bruh");

var blank = document.getElementById("blank")

var psubmit = document.getElementById("psubmit")

make.style.position = "absolute";

var kill =false

//This creates the colors for the Color Changer
colorchangebutton.addEventListener("click", function (){
    document.body.style.backgroundColor = newbgcolor.value;
});


//this is the Calculator function all this helps it calculate your easy numbers for you.
clickyboi.addEventListener("click", function(){
    
    //These variables helps the script know what it is and brings in outside information use it for what it needs
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;
    
    //this uses variables and helps out with calculating the numbers
    if(op === "+"){
    display.innerHTML = number1 + number2;
}
    else if (op === "-"){
    display.innerHTML = number1 - number2;
}
    else if (op === "/"){
    display.innerHTML = number1 / number2;
}
    else if (op === "*"){
    display.innerHTML = number1 * number2;
}
});
//this creates a function for Scare fest and it allows it go back and forwards between images

mac.addEventListener("click", function myFunction(){ 
    //kill is allowing to be turn on or off, true or false, potato tomato.
    kill =!kill;
    
    //if and else are the ones that switching back and forwards
    if(kill){
    //This creates a blank sheet for the image
    document.body.style.backgroundColor = "#f3f3f3";
    //This creates the image from the Internet
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/MQo4VGsyOJs/maxresdefault.jpg')";
    //Resizes the images
    document.body.style.backgroundSize = "4096px 2160px";
    //This makes the answer to change color and for this I create helpes out by making the answer more visible
    document.getElementById("display").style.color = "white";
    }
    //This is just makes the background blank and not occpied 
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";
    document.getElementById("display").style.color = "black";
    }
});
make.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/newsfeed/000/349/786/238.jpg')";
    document.body.style.backgroundSize = "4096px 2160px";
    document.getElementById("display").style.color = "white";
    }
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/msJxCDiT1pg/maxresdefault.jpg')";
    document.getElementById("display").style.color = "black";
    }

});

psubmit.addEventListener("click", function(){
    
    // alert()
    var oki = poki.value;
    
     
    if(oki === "gnome"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/EaqJgQOVZ9k/hqdefault.jpg')";
    document.body.style.backgroundSize = "4096px 2160px";//The no-repaet doesn't allow the image to repeat and make more appling
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "4096px 2160px";
    document.getElementById("display").style.color = "black";
    document.getElementById("mane").style.color = "black";

}
    else if (oki === "music"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://tshop.r10s.com/0a7/df4/b238/d1a2/5078/90ba/2992/11c7e8b15854ab3a294904.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "4096px 2160px";
    document.getElementById("display").style.color = "black";
    document.getElementById("mane").style.color = "black";
}
   else if (oki === "blank"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";
    document.getElementById("display").style.color = "black";
    document.getElementById("mane").style.color = "black";
}
   else if (oki === "bruh"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/newsfeed/001/023/007/f29.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.getElementById("display").style.color = "white";
    document.getElementById("mane").style.color = "white";
    document.body.style.backgroundSize = "4096px 2160px";
}
    else if (oki === "pews"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Screen_Shot_2018_11_30_at_9.47.55_AM.0_0.png?ewaB3olMB0gigscq5IEH3PX51GstcRAf')";
   document.body.style.backgroundRepeat = "no-repeat";
   document.getElementById("display").style.color = "white";
   document.getElementById("mane").style.color = "white";
    document.body.style.backgroundSize = "4096px 2160px";

}
    else if (oki === "apex"){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://s3.dexerto.com/thumbnails/_thumbnailLarge/Dlive-Apex-Thumb-Generic.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "4096px 2160px";;
    document.getElementById("display").style.color = "white";
    document.getElementById("mane").style.color = "white";
}
});

//this stops the image from repeating itself
function myFunction() {
  document.body.style.backgroundRepeat = "no-repeat";
}


//these creates the movement of a button
mac.addEventListener("mousemove", function(){
    make.style.top = Math.random() * 2160 + "px";
    make.style.left = Math.random() * 4096 + "px";
});
make.addEventListener("mousemove", function(){
    make.style.top = Math.random() * 2160 + "px";
    make.style.left = Math.random() * 4096 + "px";
});