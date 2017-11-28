var centerX = 0;
var centerY = 0;

var bgColor;


var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;



function preload() {
    bgImage = loadImage("assets/jungle.jpg");

}

function setup() {
    createCanvas(800, 560);
    centerX = width / 2;
    centerY = height / 2

    bgColor = color(152, 215, 221);

    currentBgImage = bgImage;
    img = loadImage("assets/orangutan.png");
    img2 = loadImage("assets/tiger2.png");

}

function draw() {
    background(bgColor);
    image(currentBgImage, 0, 0, 800, 560);

      // Displays the image at its actual size at point (0,0)
  image(img, 500, 0);
    image(img2, 0, 360);

}
