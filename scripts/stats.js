let firstPlaceName = document.getElementById('firstPlace')
let firstPlaceScore = document.getElementById('firstScore')
let usersDB = JSON.parse(localStorage.getItem('score'))
let tbody = document.querySelector('tbody')


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
ref = database.ref('testing-proyect-a9124')
ref.on('value', gotData, errData)

// Show Score comming from DB
function gotData(data) {
    let scores = data.val()
    let valuex = Object.values(scores)
    let sorted = valuex.sort((a,b)=> b.score - a.score)
    sorted = sorted.splice(0,10)
    sorted.forEach((puntuation) => {
        
        let newTr = document.createElement('tr')
        newTr.innerHTML = `<td id="firstPlace" class="info-text ">${puntuation.name}</td>
        <td id="firstScore" class="info-text pr-5 text-right">${puntuation.score}</td>`
        tbody.appendChild(newTr)
    
    });
}

function errData(err) {
    console.log(err);
}