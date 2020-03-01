let articleRaw = "https://en.wikipedia.org/api/rest_v1/page/summary/Donald_Trump"
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
    createCanvas(windowWidth-40, windowHeight-90);
    shutGun = loadSound("resources/gunshot.wav");
    for (let i = 0; i < 30; i++) {
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
    if(heroSelection.style.display !== "none"){
        heroSelection.style.display = "none";
    } 
}