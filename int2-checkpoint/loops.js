/* global draw ellipse rect p processing width height size fill stroke strokeWeight line mouseX mouseY background*/
var mouseX;
var mouseY;
function mousemove (event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(4096,2160 );background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background(255,255,255);
   
   for(var i=0;i<4096;i+=120){
   for(var j=0;j<4096;j+=120){
       fill(255,0,0);
       rect(i,j,100,100);
       fill(0,0,255);
       ellipse(i,j,80,80)
   }
   }
  fill(0,255,0);
    ellipse(mouseX,mouseY,100,100)
    
    ellipse(Math.floor(mouseX/120)*120, Math.floor(mouseY/120)*120,80,80)
    
};    
    
    
    document.onclick = function(e){
        alert(Math.floor(mouseX/120) + ", " + Math.floor(mouseY/120))
        
    }
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);