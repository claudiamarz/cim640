var posX = 0;
var posY = 0;

function setup(){
    createCanvas(1000,1000);
    background(0);
    background(152, 215, 221);
    
    posX = width/2;
    posY = height/2;
    
}

function draw(){
    
    noStroke();
    fill("green");
    rect(posX-25, posY,20,500);
    fill("pink");
    ellipse(posX-20, posY-110,130,130);
    fill("pink");
    ellipse(posX-100, posY-20,130,130);
    fill("pink");
    ellipse(posX-70, posY+90,130,130);
    fill("pink");
    ellipse(posX+40, posY+90,130,130);
    fill("pink");
    ellipse(posX+70, posY-30,130,130);
    fill(255,251,131);
    ellipse(posX-20, posY,130,130);
    fill("black");
    ellipse(posX, posY -10,10,18);
    fill("black");
    ellipse(posX-40, posY -10,10,18);
    fill(122,23,51);
    arc(posX-20,posY+10,90,90, TWO_PI, PI);
}