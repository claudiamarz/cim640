var centerX = 0;
var centerY = 0;

var bgColor;

var currentBgImage;

var interfaceItems = [];

var languageButton;

function preload() {
    bgImage = loadImage('assets/farm.gif');
}

function setup() {
    var song = loadSound('assets/rooster.mp3');
    var song1 = loadSound('assets/cow.mp3');
    var song2 = loadSound('assets/pig.mp3');
    var song3 = loadSound('assets/horse.mp3');
    var songSpanish = loadSound('assets/gallo.mp3');
    var songSpanish1 = loadSound('assets/vaca.mp3');
    var songSpanish2 = loadSound('assets/cerdo.mp3');
    var songSpanish3 = loadSound('assets/gallo.mp3');

    createCanvas(1000, 760);
    centerX = width / 2;
    centerY = height / 2

    bgColor = color(152, 215, 221);

    currentBgImage = bgImage;
    img = loadImage("assets/rooster.png");
    img2 = loadImage("assets/cow.png");
    img3 = loadImage("assets/pig.png");
    img4 = loadImage("assets/horse.png");

    interfaceItems.push(new interface(630,220,103,91, img, song, songSpanish));
    interfaceItems.push(new interface(0,460,439,271, img2, song1, songSpanish1));
    interfaceItems.push(new interface(450,580,255,135, img3, song2, songSpanish2));
    interfaceItems.push(new interface(640,490,350,216, img4, song3, songSpanish3));

    languageButton = createButton("English")
    languageButton.position(10, 10);
    languageButton.style('width', '100px');
    languageButton.mousePressed(toggleLanguage);
}

function toggleLanguage(){
    if (languageButton.elt.innerHTML === "English") {
        languageButton.elt.innerHTML = "Spanish"
    } else {
        languageButton.elt.innerHTML = "English"
    }
}



function draw() {
    background(bgColor);
    image(currentBgImage, 0, 0, 1000, 760);

      // Displays the image at its actual size at point (0,0)
  //image(img, 500, 0);
//    image(img2, 0, 360);

//        interfaceItems[0].display();
//        interfaceItems[1].display();
//        interfaceItems[2].display();
//        interfaceItems[3].display();



    for(var i = 0; i < interfaceItems.length; i++){
        interfaceItems[i].display();
    }


//    if slider value == english
//    set all interfaceItems.language = "english"
//
//    if slider value == spanish
//    set all interfaceItems.language = "spanish"
//
    /*



    */


}

function mousePressed(){
  if(interfaceItems[0].check() == true){
      //if( interfaceItems[0].language == "english")
   interfaceItems[0].sounds.setVolume(1);
    interfaceItems[0].sounds.play();

      //if( interfaceItems[0].language == "spanish")
      //    interfaceItems[0].sounds2.play();

      if (languageButton.elt.innerHTML === "Spanish") {
      }

  }


     if(interfaceItems[1].check() == true){
   interfaceItems[1].sounds.setVolume(1);
    interfaceItems[1].sounds.play();
  }

         if(interfaceItems[2].check() == true){
   interfaceItems[2].sounds.setVolume(1);
    interfaceItems[2].sounds.play();
  }

         if(interfaceItems[3].check() == true){
   interfaceItems[3].sounds.setVolume(1);
    interfaceItems[3].sounds.play();
  }
}

//tempSound, tempSound2, tempLanguage

function interface(tempX, tempY, tempBoxSizeX, tempBoxSizeY, tempImage, tempSound){
  this.x  = tempX;
  this.y = tempY;
  this.boxSizeX = tempBoxSizeX;
    this.boxSizeY = tempBoxSizeY;
    this.sounds = tempSound;

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

