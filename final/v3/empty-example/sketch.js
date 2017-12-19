var centerX = 0;
var centerY = 0;

var bgColor;

var currentBgImage;

var interfaceItems = [];

var languageButton;

var song = 'assets/rooster.mp3';
var song1 = 'assets/cow.mp3';
var song2 = 'assets/pig.mp3';
var song3 = 'assets/horse.mp3';

var songSpanish = 'assets/gallo.mp3';
var songSpanish1 = 'assets/vaca.mp3';
var songSpanish2 = 'assets/cerdo.mp3';
var songSpanish3 = 'assets/caballo.mp3';

function preload() {
    bgImage = loadImage('assets/farm2.jpg');
}

function setup() {
    createCanvas(1200, 760);
    centerX = width / 2;
    centerY = height / 2

    bgColor = color(152, 215, 221);

    currentBgImage = bgImage;
    img = loadImage("assets/rooster.png");
    img2 = loadImage("assets/cow.png");
    img3 = loadImage("assets/pig.png");
    img4 = loadImage("assets/horse.png");

    interfaceItems.push(new interface(780,220,103,110, img, loadSound(song)));//rooster
    interfaceItems.push(new interface(0,460,439,271, img2, loadSound(song1)));//cow
    interfaceItems.push(new interface(450,580,255,135, img3, loadSound(song2)));//pig
    interfaceItems.push(new interface(700,490,350,216, img4, loadSound(song3)));//horse

    // languageButton = createButton("English")
    // languageButton.position(10, 10);
    // languageButton.style('width', '100px');
    // languageButton.mousePressed(toggleLanguage);

    langSelect = createSelect();
    langSelect.position(10, 10);
    langSelect.style('width', '100px');
    langSelect.option('English');
    langSelect.option('Spanish');
    langSelect.changed(toggleLanguage);
}


function toggleLanguage(){
  var lang = langSelect.value();
  interfaceItems = [];
  if(lang == "Spanish"){
    interfaceItems.push(new interface(780,220,103,91, img, loadSound(songSpanish)));
    interfaceItems.push(new interface(0,460,439,271, img2, loadSound(songSpanish1)));
    interfaceItems.push(new interface(450,580,255,135, img3, loadSound(songSpanish2)));
    interfaceItems.push(new interface(700,490,350,216, img4, loadSound(songSpanish3)));
  }else{
    interfaceItems.push(new interface(780,220,103,91, img, loadSound(song)));
    interfaceItems.push(new interface(0,460,439,271, img2, loadSound(song1)));
    interfaceItems.push(new interface(450,580,255,135, img3, loadSound(song2)));
    interfaceItems.push(new interface(700,490,350,216, img4, loadSound(song3)));
  }
  draw();
}

function draw() {
    background(bgColor);
    image(currentBgImage, 0, 0, 1200, 760);
    for(var i = 0; i < interfaceItems.length; i++){
        interfaceItems[i].display();


}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    interfaceItems[0].sounds.setVolume(1);
    interfaceItems[0].sounds.play();
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

