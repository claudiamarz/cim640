var posX = 0;
var posY = 0;

function setup(){
    createCanvas(1000,1000);
    background(0);
    background(255, 0, 0);
    background("teal");
    
    posX = width/2;
    posY = height/2;
    
}

function draw(){
    
    noStroke();
    fill("pink");
    ellipse(posX, posY,100,100);
    fill("red")
    rect(posX - 25, posY + 20,50,20)
    fill("white");
    ellipse(posX + 20, posY -20,10,40);
    fill("white");
    ellipse(posX - 20, posY -20,10,40);
    fill("black");
    ellipse(posX + 20, posY -10,10,18);
    fill("black");
    ellipse(posX - 20, posY -10,10,18);
    stroke("cyan");
    strokeWeight(2);
    point(posX + 10, posY);    
    stroke(125,0,0);
    line(posX - 25,posY + 30, posX +25, posY +30);
    nofill();
    arc(posX, posY, 100, 100, PI, TWO_PI);
}