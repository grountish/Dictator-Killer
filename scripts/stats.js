let firstPlaceName = document.getElementById('firstPlace')
let firstPlaceScore = document.getElementById('firstScore')
let usersDB = JSON.parse(localStorage.getItem('score'))
let tbody = document.querySelector('tbody')


usersDB.forEach(puntuation => { 
   let newTr = document.createElement('tr')
   newTr.innerHTML = `<td id="firstPlace" class="info-text ">${puntuation.name}</td>
   <td id="firstScore" class="info-text pr-5 text-right">${puntuation.score}</td>`
    tbody.appendChild(newTr)
    
});


//firstPlaceScore.innerText = usersDB2[usersDB2.length-1].score 
