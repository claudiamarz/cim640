var colorValue = "yellow"

var centerX = 0;
var centerY = 0;

var bgColor;


var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 100;
var hitZoneY = 200;

var hitZone2X = 350;
var hitZone2Y = 350;

var hitZone3X = 600;
var hitZone3Y = 200;

var twinkle
var sun
var waterCan


function preload(){
    bgImage = loadImage("assets/backgroundblue.jpg");
    bgImage2 = loadImage("assets/backgroundnavy.jpg");
    twinkle = loadImage("assets/twinkle.png");
    sun = loadImage("assets/sun.png");
    waterCan = loadImage("assets/watercan.png");
    
}

function setup(){
    createCanvas(700,700);
    centerX = width/2;
    centerY = height/2;
    
    bgColor = color(152,215,221);
    
    
    bgChange = createButton("night");
    bgChange.position(100,700);
    bgChange.mousePressed(changeBgFunction);
     
    bgChange2 = createButton("day");
    bgChange2.position(0,700);
    bgChange2.mousePressed(changeBgFunction2);
    
    currentBgImage = bgImage;
   
}
    

function draw(){
    background(bgColor);
    image(currentBgImage, 0,0, 700, 700);
   
    console.log("mouseX: " + mouseX + "mouseY: " + mouseY);
    centerX = mouseX;
    centerY = mouseY;

    
//stem    
    noStroke();
    fill("green");
    rect(centerX-25, centerY,20,700);
    
//petals
    fill("pink");
    ellipse(centerX-20, centerY-110,130,130);
    fill("pink");
    ellipse(centerX-100, centerY-20,130,130);
    fill("pink");
    ellipse(centerX-70, centerY+90,130,130);
    fill("pink");
    ellipse(centerX+40, centerY+90,130,130);
    fill("pink");
    ellipse(centerX+70, centerY-30,130,130);
//center
    fill(colorValue);
    ellipse(centerX-20, centerY,130,130);
    
var wiggleX = map(mouseX, 0, width, -10, 10);
    
//eyes
    fill("black");
    ellipse(centerX + wiggleX, centerY -10,10,18);
    fill("black");
    ellipse(centerX-40 + wiggleX, centerY -10,10,18);
//mouth
    fill(122,23,51);
    arc(centerX-20 + wiggleX,centerY+10,90,90, TWO_PI, PI);

        
    var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist <= 5){
        console.log("totally in the zone");
        image(twinkle,0,0);
        
       }
    
    var hitZoneDist2 = dist(hitZone2X,hitZone2Y,mouseX,mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist2 <= 5){
        console.log("totally in the zone");
        image(waterCan,200,0);
        
       }
    
    var hitZoneDist3 = dist(hitZone3X,hitZone3Y,mouseX,mouseY);
    console.log("hitZoneDist " + hitZoneDist);
    
    if(hitZoneDist3 <= 5){
        console.log("totally in the zone");
        image(sun,0,0);
        
       }
    

//twinkle
    stroke("black");
    strokeWeight(1);
    fill("white")
    ellipse(hitZoneX, hitZoneY, 10, 10);
    
 //waterCan
    stroke("black");
    strokeWeight(1);
    fill("white")
    ellipse(hitZone2X, hitZone2Y, 10, 10);
    
 //sun
    stroke("black");
    strokeWeight(1);
    fill("white")
    ellipse(hitZone3X, hitZone3Y, 10, 10);
        
    

}

function mousePressed(){
    if (colorValue === "yellow"){
        colorValue = "orange";
    }else{
        colorValue = "yellow";
    }
}


    
function changeBgFunction(){
    currentBgImage = bgImage2;
    
}

function changeBgFunction2(){
    currentBgImage = bgImage;
}

