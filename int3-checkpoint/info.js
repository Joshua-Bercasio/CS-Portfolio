var RDdisplay =document.getElementById("RDdisplay");
var Hoomanminddisplay =document.getElementById("Hoomanminddisplay");
var Human =document.getElementById("Human");
var BD =document.getElementById("BD");
var kill = false;


BD.addEventListener("click", function (){ 
    kill =!kill;
    if(kill){
    RDdisplay.innerHTML = "<h1> Rabbit or Duck or Both </h1>";
    }
    else{
        RDdisplay.innerHTML =""
    }
});

Human.addEventListener("click", function (){
    kill=!kill
    if(kill){
    Hoomanminddisplay.innerHTML = "<h1> It's a Human mind </h1>";
    }
    else{
        Hoomanminddisplay.innerHTML = "";
    }
});