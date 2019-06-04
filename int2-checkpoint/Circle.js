/* global draw ellipse rect p processing width height size fill stroke strokeWeight background*/
var sketch = function(processing) {with(processing) {size(1920, 1048);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos =0

var yPos =0

var xPos2 =1920

var yPos2 =5

draw = function() {
background(0,0,0);
//Ellipse allows you to create circle 
ellipse(xPos,yPos,60,60);

//xPos allows you to change the location while keeping it in a animation
xPos += 3

//yPos is the same as the xPos
yPos += 3

//Make your shape thicker or thiner depending on your variable
strokeWeight(30);

//
stroke(237,64,190,190); 

//
fill(255,0,0);

//2nd Cross Circle
ellipse(xPos2,yPos2,60,60);

xPos2 -= 3

yPos2 -= -3

strokeWeight(30);
//line(1,1,1,1);

stroke(237,64,190,190); 

fill(255,0,0);


};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);