/* global Processing draw mouseClicked ellipse rect p processing width height size fill stroke strokeWeight line mouseX mouseY background random*/

function mousemove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

/* global draw ellipse rect p processing width height size fill stroke strokeWeight background*/
var sketch = function(processing) {
    with(processing) {
        size(4096, 2160);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        
        
        //These variables help create the interaction with the mouse with in the website
        var mouseX;
        var mouseY;
        var game = true;

        //This creates a section to click on
        mouseClicked = function() {
            if (mouseX > 2048 && mouseY > 1080) {
            game = !game;
            }
        };

        //This function creating the atom
        function atom() {
            //This is a white background to represent the bonds
            background(255, 255, 255);

            //Loop shapes
            for (var i = 0; i < 4096; i += 120) {
                for (var j = 0; j < 4096; j += 120) {
                    //neutrons
                    fill(255, 0, 0);
                    rect(i, j, 100, 100);
                    //Protons
                    fill(0, 0, 255);
                    ellipse(i, j, 80, 80);
                   // fill(0,255,0);
           // ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            
                    
            }
            }
            
            //these are the code that traks your mouse in the second screen
            fill(0,191,255);
            ellipse(mouseX, mouseY, 100, 100);
            ellipse(Math.floor(mouseX / 120) * 120, Math.floor(mouseY / 120) * 120, 80, 80);
            //Electrons
            fill(0,255,0);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            ellipse(Math.floor(random(4096) / 120) * 120, Math.floor(random(2160) / 120) * 120, 80, 80);
            
        }

        //It is declaring that it is a function
        var move = function() {
            background(255, 20, 147);
            

            //background color change, statez the function action

            //top left Yellow
            if (mouseX < 2048 && mouseY > 0) {
                background(255, 242, 0);
            }
            //bottom left Navy
            if (mouseY > 1080 && mouseX < 2048) {
                background(0, 0, 128);
            }
            //top right orange
            if (mouseY < 1080 && mouseX > 2048) {
                background(255, 148, 0);
            }

            //mouse tracker & thickness
            strokeWeight(5,5,5,5);
            fill(random(0, 255), random(0, 255), random(0, 255));
            ellipse(mouseX, mouseY, 150, 150);

            //line tracker
            line(mouseX, mouseY, 0, 2160);
            line(mouseX, mouseY, 4096, 2160);
            line(mouseX, mouseY, 4096, 0);
            line(mouseX, mouseY, 0, 0);
            line(mouseX, mouseY, 0, 1080);
            line(mouseX, mouseY, 2048, 0);
            line(mouseX, mouseY, 2048, 2160);
            line(mouseX, mouseY, 4096, 1080);
            line(mouseX, mouseY, 1024, 0);
            line(mouseX, mouseY, 3072, 0);
            line(mouseX, mouseY, 0, 540);
            line(mouseX, mouseY, 0, 1620);
            line(mouseX, mouseY, 4096, 1620);
            line(mouseX, mouseY, 4096, 540);
            line(mouseX, mouseY, 1024, 2160);
            line(mouseX, mouseY, 3072, 2160);

            //border lines to let people know what areas is changeing
            line(2048, 0, 2048, 2160);
            line(0, 1080, 8192, 1080);
            
            base();
        };

        //this variables controll the location of the animations   
        var xPos = 4096;
        var yPos = 2160;
        var xPos2 = 4096;
        var yPos2 = 0;
        var xPos3 = 0;
        var yPos3 = 0;
        var xPos4 = 0;
        var yPos4 = 2160;
        var xPos5 = 2048;
        var yPos5 = 1080;
        
        
        //Creating the function and giving it a name
        var base = function() {

            //stroke(random(0,255),random(0,255),random(0,255));

            //Circle Animation
            strokeWeight(5);
            //bottom right
            fill(0, 255, 0);
            ellipse(xPos, yPos, random(0, 255), random(0, 255));
            //Top right
            fill(0, 255, 0);
            ellipse(xPos2, yPos2, random(0, 255), random(0, 255));
            //Top left
            fill(0, 255, 0);
            ellipse(xPos3, yPos3, random(0, 255), random(0, 255));
            //bottom right
            fill(0, 255, 0);
            ellipse(xPos4, yPos4, random(0, 255), random(0, 255));
            

            //Random rectangle Animation
            fill(255,0,0);
            rect(xPos5, yPos, random(0, 255), random(0, 255));
            fill(255,0,0);
            rect(xPos2, yPos5, random(0, 255), random(0, 255));
            fill(255,0,0);
            rect(xPos5, yPos3, random(0, 255), random(0, 255));
            fill(255,0,0);
            rect(xPos4, yPos5, random(0, 255), random(0, 255));
            

            //Thie controlls the speed and the angle it is going
            xPos += -2;
            yPos += -2;

            xPos2 -= 2;
            yPos2 -= -2;

            xPos3 += 2;
            yPos3 += 2;

            xPos4 -= -2;
            yPos4 -= 2;
        };

        //Any function, variables, or codes will be process through here
        draw = function() {
            //if it one statement is true it is doing the action(Like the function atom it does the action it stated above)
            if (game) {
                move();
            }
            else {
                atom();
            }
        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
