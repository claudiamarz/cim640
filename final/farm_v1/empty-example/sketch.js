var centerX = 0;
var centerY = 0;

var bgColor;

var soundFile;

var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var interfaceItems = [];




function preload() {
    bgImage = loadImage("assets/jungle.jpg");
  soundFile = loadSound('assets/elephant.mp3');
}

function setup() {
    createCanvas(800, 560);
    centerX = width / 2;
    centerY = height / 2

    bgColor = color(152, 215, 221);

    currentBgImage = bgImage;
    img = loadImage("assets/orangutan.png");
    img2 = loadImage("assets/tiger2.png");
    img3 = loadImage("assets/toucan.png");
    img4 = loadImage("assets/elephant.png");

    interfaceItems.push(new interface(500,0,300,398, img));
    interfaceItems.push(new interface(0,360,250,184, img2));
    interfaceItems.push(new interface(640,440,120,120, img3));
    interfaceItems.push(new interface(200,120,323,300, img4));

}



function draw() {
    background(bgColor);
    image(currentBgImage, 0, 0, 800, 560);

      // Displays the image at its actual size at point (0,0)
  //image(img, 500, 0);
//    image(img2, 0, 360);

    interfaceItems[0].display();
        interfaceItems[1].display();
        interfaceItems[2].display();
        interfaceItems[3].display();


}

function mousepressed(){
     if(interfaceItems[0].check() == true){
    soundFile.setVolume(1);
    soundFile.play();
  }

  if(interfaceItems[1].check() == false){
    soundFile.stop();
  }
}



function interface(tempX, tempY, tempBoxSizeX, tempBoxSizeY, tempImage){
  this.x  = tempX;
  this.y = tempY;
  this.boxSizeX = tempBoxSizeX;
    this.boxSizeY = tempBoxSizeY;

  this.img = tempImage;
  this.overlay = false;

  this.display = function(){
    image(this.img, this.x, this.y, this.boxSizeX, this.boxSizeY);

//    if(this.overlay == true){
//      fill(255,200);
//      rect(this.x, this.y, this.boxSize, this.boxSize);
//    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSizeX) && mouseY > this.y && mouseY < (this.y + this.boxSizeY)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }

  }

}

