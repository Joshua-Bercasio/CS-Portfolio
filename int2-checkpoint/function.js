/* global draw base ellipse rect triangle processing width height size fill stroke strokeWeight line mouseX mouseY background random*/
var mouseX;
var mouseY;
function mousemove (event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
function mousedown (event){
    base();
}


var xPos =4096

var yPos =2160

var xPos2 =4096

var yPos2 =0

var xPos3 =0

var yPos3 =0

var xPos4 =0

var yPos4 =2160


var sketch = function(processing) {with(processing) {size(7680,4320);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//,4096,2160
var base = function(){
    
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(21)
    fill(0,0,255);
    ellipse(xPos,yPos,random(0,255),random(0,255));
    fill(0,0,255);
    ellipse(xPos2,yPos2,random(0,255),random(0,255));
    fill(0,0,255);
    ellipse(xPos3,yPos3,random(0,255),random(0,255));
    fill(0,0,255);
    ellipse(xPos4,yPos4,random(0,255),random(0,255));
    
    
    xPos += -10
    yPos += -10
    
    xPos2 -= 10
    yPos2 -= -10
    
    xPos3 += 10
    yPos3 += 10
    
    xPos4 -= -10
    yPos4 -= 10
    
    
    
    fill(0,0,0)
    ellipse(mouseX,mouseY,200, 200); 
    
}
draw = function() {
    background(0,0,55);
   base();
    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);