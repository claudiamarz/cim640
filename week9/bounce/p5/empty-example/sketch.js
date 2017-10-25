var posX = 250;
var posY = 0;

var upDown = false;

function setup(){
    createCanvas(500,500);
    
}

function draw(){
    background(255);
    ellipse(posX,posY,50,50);
    //posY++;
    console.log(posY);
    
    if(posY <= 0){
        upDown = false;
    }
    
    if(posY >= height){
        //code below starts it from the top
        //posY = 0;
        
        //code below leaves the ball in the middle
        //posY--;
    
        upDown = true;
    }
    
    if(upDown == true){
        //posY--;
       
        //make faster
        posY = posY - 5;
    }
    
    if(upDown == false){
        //posY++;
        
        posY = posY + 5;
    }
}