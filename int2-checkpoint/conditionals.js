/* global draw ellipse rect p processing width height size fill stroke strokeWeight line mouseX mouseY background*/
var mouseX;
var mouseY;
function mousemove (event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(1920,1080);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background(255,20,147)
    //top left Yellow
    if(mouseX < 960 && mouseY > 0){
        background(255,242,0);
    }
    //bottom left Navy
    if(mouseY > 540 && mouseX < 960){
        background(0,0,128);
    }
    //top right White
    if(mouseY < 540 && mouseX > 960){
        background(255,148,0);
    }
ellipse(mouseX,mouseY,150,150);
fill(255,255,255);
line(mouseX,mouseY,0,1080);
line(mouseX,mouseY,1920,1080);
line(mouseX,mouseY,1920,0);
line(mouseX,mouseY,0,0);
line(mouseX,mouseY,0,540);
line(mouseX,mouseY,960,0);
line(mouseX,mouseY,960,1080);
line(mouseX,mouseY,1920,540);
line(960,0,960,1080);
line(0,540,3840,540);
strokeWeight(10,10,10,10)
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);