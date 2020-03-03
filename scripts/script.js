let articleRaw = "https://en.wikipedia.org/api/rest_v1/page/summary/Donald_Trump"

let userName = document.getElementById('name')
let btnSave = document.getElementById('saveScore')
let points = 0;


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
window.onresize = showCanvas;

function showCanvas() {
    createCanvas(windowWidth - 10, windowHeight - 130);
    shutGun = loadSound("resources/gunshot.wav");
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
        s = ns - (m * 60) ;
    points = (trumps.length - 30) * -5

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
    pointStrings = points + ""
    console.log(pointStrings);

}
btnSave.onclick = saveScore
tabla = document.getElementById('tabla')

function saveScore() {

    let usersDB = JSON.parse(localStorage.getItem('scores'))

    if (!usersDB) {
        usersDB = []
    }

    let puntuation = {
        name: userName.value,
        score: points
    }


    usersDB.push(puntuation)

    localStorage.setItem('score', JSON.stringify(usersDB))
    btnSave.remove()
    let goToStats = document.createElement("div")
    goToStats.innerHTML = `<a href="stats.html">
    <button id="sign-up-btn" type="submit"
    class="py-2 my-3 col-lg-4  mx-auto text-center info-text btnsubmit">Go to stats</button></a>`
    window.location.href = "stats.html"

}