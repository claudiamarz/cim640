//var bubble1;
//var bubble2;

var multiBubble = [];

function setup() {
    createCanvas(400, 400);

    //bubble1 = new bubble(random(width), random(height), random(100));
    //bubble2 = new bubble(random(width), random(height), random(100));

    for (var i = 0; i < 100; i++) {
        var bubbleC = color(random(256), random(256), random(256));
        multiBubble.push(new bubble(random(width), random(height), random(100), bubbleC));
    }

}

function draw() {
    background(255);
    //  bubble1.display();
    //  bubble2.display();
    //  move();
    //  console.log(checkPos());

    //    if(checkPos() == true){
    //        bubbleX = 0;
    //    }

    for (var i = 0; i < multiBubble.length; i++) {
        multiBubble[i].display();
        multiBubble[i].moveX();
        multiBubble[i].moveY();

        if (multiBubble[i].checkPosX() == true) {
            multiBubble[i].dirX = false;
        } else if (multiBubble[i].checkPosX() == 1) {
            multiBubble[i].dirX = true;
        }

    }

    if (multiBubble[i].checkPosY() == true) {
        multiBubble[i].y = random(height);

    }
}
}

function bubble(tempX, tempY, tempDiameter, c, tempDir) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.color = c;
    this.dirX = tempDirX;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.moveX = function () {
        if (this.dirX == true) {} else {
            this.x--;
        }
        this.x++;
    }

    this.checkPosX = function () {
        if (this.x > width) {
            return 0;
        } else if (this.x < 0) {
            return 1;
        } else {

        }

    }

    this.moveY = function () {

        this.y++;
    }

    this.checkPosY = function () {
        if (this.y > height) {
            return true;
        }
    }
}



function display() {
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}

function move() {
    bubbleX++;
}

function checkPos() {
    if (bubbleX > width) {
        return true;
    } else {
        return false;
    }
}
