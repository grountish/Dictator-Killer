let dictatorName 
let dictatorLastName
let usersDB = JSON.parse(localStorage.getItem('score'))
window.onresize = showCanvas;
let userName = document.getElementById('name')
let btnSave = document.getElementById('saveScore')
let points = 0;
  // Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB5-avS8qpLLRa2KIhyRSwvIvhYNIh1-s4",
    authDomain: "testing-proyect-a9124.firebaseapp.com",
    databaseURL: "https://testing-proyect-a9124.firebaseio.com",
    projectId: "testing-proyect-a9124",
    storageBucket: "testing-proyect-a9124.appspot.com",
    messagingSenderId: "858551138090",
    appId: "1:858551138090:web:70b27c90b9781ee0e11053"
};

firebase.initializeApp(firebaseConfig)
var database = firebase.database();
let ref = database.ref('testing-proyect-a9124')


// end of setting DB


// check points of current user 

function checkPoints(){
    if(!usersDB || usersDB[0].score < 275){
        dictatorName = 'Donald'
     dictatorLastName = 'Trump'
    } else{
        dictatorName = 'Francisco'
        dictatorLastName = 'Franco'
    }
}
checkPoints()

// Fetch F(x) 
let articleRaw = `https://en.wikipedia.org/api/rest_v1/page/summary/${dictatorName}_${dictatorLastName}`

const getArticle = async () => {

    const response = await
    fetch(articleRaw);
    const article1 = await response.json();
    const photoArticle = article1.thumbnail.source
    const description = article1.extract

    document.getElementById('texto').innerHTML = description
    document.getElementById('imagen').src = photoArticle
};

getArticle()


function showCanvas() {
    createCanvas(windowWidth , windowHeight - 120);
    shutGun = loadSound("./resources/gunshot.wav");
    for (let i = 0; i < 60; i++) {
        let x = random(width - 100); // USAR PERLON NOISE
        let y = random(height - 100); // USAR PERLON NOISE
        let r = random(50, 50); // USAR PERLON NOISE
        let b = new Bubble(x, y, r);
        trumps.push(b);
        if (trumps.length > 30) {
            trumps.splice(i, 30);
        }
    }
    heroSelection = document.getElementById("hero-section")
    if (heroSelection.style.display !== "none") {
        heroSelection.style.display = "none";
    }
    r.style.display = "inline"

}

var start = Date.now(),
    r = document.getElementById('countdown');
let timeScore = function () {
    var diff = Date.now() - start,
        ns = (((3e5 - diff) / 1000) >> 0),
        m = (ns / 60) >> 0,
        s = ns - m * 60 ;
    points = (trumps.length - 59) * -5

    r.textContent = "Time :" + '' + (('' + s).length > 1 ? '' : '0') + s + ' Seconds | Points :' + points;
    if (diff > (3e5)) {
        start = Date.now()
    }
    if (s === 1) {
        clearTimeout(timeScore)
        showScore(points)
    }
    setTimeout(timeScore, 1000);
   
};

timeScore()



function showScore(points) {
    scoreSection = document.getElementById('score-section')
    scoreSection.style.display = "inline"
    score = document.getElementById('pointsScore')
    score.innerHTML = points
    r.remove();
    canvaGame = document.querySelector('canvas')
    canvaGame.remove()
    pointStrings = points 

}

btnSave.onclick = saveScore
let tabla = document.getElementById('tabla')
let scoresDB = JSON.parse(localStorage.getItem('scores'))


function saveScore() {


    if (!scoresDB) {
        scoresDB = []
    }

    // To check the current user points
    let puntuation = {
        name: userName.value,
        score: points
    }
    // data to firebase
    let dataToFB = {
        name: userName.value,
        score: points
    }

    ref.push(dataToFB)
    scoresDB.push(puntuation)

    localStorage.setItem('score', JSON.stringify(scoresDB))
    btnSave.remove()
    let goToStats = document.createElement("div")
    goToStats.innerHTML = `<a href="stats.html">
    <button id="sign-up-btn" type="submit"
    class="py-2 my-3 col-lg-4  mx-auto text-center info-text btnsubmit">Go to stats</button></a>`
    window.location.href = "stats.html"

}