let trumps = [];
let trump;
let shutGun;
//------------------Resize Windows = Setup

window.onresize = setup;
// ----------------------

function preload() {
    img = loadImage("https://www.pngkey.com/png/full/4-41148_trump-face-donald-trump.png")
}



function setup() {
    createCanvas(windowWidth, windowHeight);
    shutGun = loadSound("resources/gunshot.wav");
    for (let i = 0; i < 30; i++) {
        let x = random(width-100); // USAR PERLON NOISE
        let y = random(height-100); // USAR PERLON NOISE
        let r = random(50, 50); // USAR PERLON NOISE
        let b = new Bubble(x, y, r);
        trumps.push(b);
        if(trumps.length > 30){
            trumps.splice(i, 30);

        }
    }

}

function mousePressed() {
    if (shutGun.isPlaying()) {
        shutGun.stop();

    } else {
        shutGun.play();

    }
    for (let i = trumps.length - 1; i >= 0; i--) {
        if (trumps[i].contains(mouseX, mouseY)) {
            trumps.splice(i, 1);
        }
    }
}

function draw() {

    for (let i = 0; i < trumps.length; i++) {
        trumps[i].move();
        trumps[i].show();
    }
    textSize(random(100))
    fill(random(222))
    text(trumps.length, random(5000), random(5000));
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

    }
    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {

        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        if (width < 500) {
            image(img, this.x, this.y, 70, 70) // <-- iphone 6,7,8

        }
        if (width > 500) {
            image(img, this.x, this.y, 60, (height / 10)) // <-- wide res

        }
    }
}