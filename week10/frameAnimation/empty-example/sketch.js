var frameArray = [];
var counter = 0;

var interval = 300;
var prevMillis = 0;

function setup(){
    
    createCanvas(500,500);  
    
    for(var i = 0; i < 4; i++){
        var lString = "assets/thatwasclose" + i + ".jpg"
        frameArray[i] = loadImage(lString);
    }
    
//    frameArray[0] = loadImage("assets/thatwasclose0.jpg");
//    frameArray[1] = loadImage("assets/thatwasclose1.jpg");
//    frameArray[2] = loadImage("assets/thatwasclose2.jpg");
//    frameArray[3] = loadImage("assets/thatwasclose3.jpg");
    
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
    
    ellipse(mouseX,mouseY,10,10);
}