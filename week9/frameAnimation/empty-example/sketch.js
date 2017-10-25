var frameArray = [];
var counter = 0;

var interval = 300;
var prevMillis = 0;

function setup(){
    
    createCanvas(500,500);
    
    frameArray[0] = loadImage("assests/thatwasclose0.jpg");
    frameArray[1] = loadImage("assests/thatwasclose1.jpg");
    frameArray[2] = loadImage("assests/thatwasclose2.jpg");
    frameArray[3] = loadImage("assests/thatwasclose3.jpg");
    
}

function draw(){
    //frameRate(1);
    console.log(millis());
   image(frameArray[counter],0,0); 
    
    
    if(millis() - prevMillis >= interval){
        prevMillis = millis();
    counter++;
    }
    
    
    if(counter == frameArray.length){
        counter = 0;
    }
    ellipse(mouseX,mouseY, 10,10)
    
}