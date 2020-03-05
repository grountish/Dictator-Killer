let trumps = [];
let trump;
let shutGun;
let track;
let dictatorFace;

//------------------Resize Windows = Setup

window.onresize = setup;
// ----------------------
var audio = new Audio('./resources/song.mp3');
audio.play();

// function checkPoints2(){
//     if(!usersDB || usersDB[0].score < 40){
//        dictatorFace = 'trumpface.png'
//     } else{
//         dictatorFace = 'francoface.png'
//     }
// }
// checkPoints2()
// dictatorFace = 'francoface.png'
function preload() {

    let newDB = JSON.parse(localStorage.getItem("score"))

    let dictatorFace = 'trumpface.png'

    if(newDB){
        if(newDB[0].score > 275){
            dictatorFace = 'francoface.png'
        }
    }
        

    img = loadImage(`./images/${dictatorFace}`)
    // track = loadSound("/resources/song.wav")

}


function setup() {
    // shutGun = loadSound("/resources/gunshot.wav")
}
function touchStarted() {
    for (let i = trumps.length - 1; i >= 0; i--) {
      if (trumps[i].contains(mouseX, mouseY)) {
        trumps.splice(i, 1);
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
        this.x = this.x + random(-12, 12);
        this.y = this.y + random(-12, 12);
    }

    show() {
        if (width < 500) {
            image(img, this.x, this.y, 40, 40) // <-- iphone 6,7,8

        }
        if (width > 500) {
            image(img, this.x, this.y, 60, (height / 10)) // <-- wide res

        }
    }
}
