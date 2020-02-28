// function printStars(howMany) {
//     console.log("*".repeat(howMany));
// }

// [1, 2, 3, 4, 5].forEach(num =>
//     printStars(num))


// printStars();

// let usuario = {
//     name: "blabla",
//     age: 21,
// }

// console.log(Object.keys(usuario));

// for (const key in usuario) {
//     console.log(key);
// }

// const classRoom2 = {
//     teacher: {
//       firstName: "Greg",
//       lastName: "Dach",
//       age: 38,
//       address: {
//         street: "3085 Kelton Knolls",
//         city: "Aldaside",
//         state: "Maryland"
//       }
//     }
//   };

// const book1 = {
//     author: "Charlotte Bronte",
//     publishers: [
//         publisher1 = {
//             companyName: "AB"
//         },
//         publisher2 = {
//             companyName: "CD"
//         }
//     ]
// // }
// book4 = ['asd', 'asdd', 'asdf'];
// // const book2 = JSON.parse(JSON.stringify(book1))
// // console.log(book1 === book2);

// // book1.author = "Emily";
// // console.log(book1);

// book3 = [...book4];

// console.log(book3);
// const students = ['Ana', 'John', 'Fabio'];

// // const ironhackers = [...students];
// // students.push("Sandra");

// // console.log(students); // <== [ 'Ana', 'John', 'Fabio', 'Sandra' ]
// // console.log(ironhackers); // <== [ 'Ana', 'John', 'Fabio' ]

// const newArr = students.map(x => x.toLowerCase());
// console.log(newArr);
// let numberg = [2,34,43,8,66,53];
// // let total = numberg.reduce((a,b) => a + b);
// // console.log(total);
// // let filteredArray = numberg.filter(x => x % 2 === 0)
// // console.log(filteredArray);
// let novoArray = [...numberg];
// let sortedArray = novoArray.sort((a,b) => a - b);
// console.log(sortedArray);
// let avg = (numberg.map((a,b)=> a + b))

// class Aeroplane {
//     constructor(capacity, name,bullets) {
//         this.name = name;
//         this.capacity = capacity;
//         this.bullets = bullets
//     }
//     showAndSumCapacity(newCapacity) {
//         let oldCapacity = this.capacity
//         this.capacity += newCapacity
//         console.log(`${this.name}'s Capacity was ${oldCapacity} and now is ${this.capacity}`);
//     }
//     showName() {
//         console.log(`Name is ${this.name}`);
//     }
// }
// class FighterPlane extends Aeroplane {
//     fire() {
//         this.bullets -= 1
//         document.getElementById('demo').innerHTML = `Loading weapon and ... <br>
//         Firing, ${this.name} has now ${this.bullets} left`
//         console.log(`Loading weapon and firing, ${this.name} has now ${this.bullets} left`);
//         if(this.bullets < 0){
//             console.log(`${this.name} has no bullets left`);
//         }
//     }
//     reload(howManyBullets){
//         this.bullets += howManyBullets
//     }
// }

// const fighterOne = new FighterPlane(2, 'Fighter-One',23);
// const fighterTwo = new FighterPlane(2, 'Fighter-Two',12);


// const p1 = new Promise((resolve, reject) => {
//     if (false)
//         throw new Error("rechazado")
//     else
//         resolve(4)
// })
// p1.then((val) => val + 2)
//     .then((val) => console.log("got", val))
//     .catch((err) => console.log("error:", err.message))

// // async await
// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("I did something"), 3000);
//     });
// };
// const doSomething = async () => {
//     console.log(await doSomethingAsync());
//     console.log("done");
// };
// console.log("before");
// doSomething();
// console.log("after");

// // códigos equivalentes / Una función async devuelve una promise
// const aFunction = async () => {
//     return 'test';
// }
// aFunction().then(console.log('test'));
// ////
// const aFunction = async () => {
//     return Promise.resolve('test');
// }
// aFunction().then(console.log('test'));

// //----------//

// Fetch using async/await
// const getFirstUserData = async () => {

//     const response = await
//     fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     const userName = users[5].name;
//     console.log (`welcome ${userName}`);
// };
// getFirstUserData();
// Multiple async functions in series
// const promiseToDoSomething = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 10000)
//     })
//   }
//   const watchOverSomeoneDoingSomething = async () => {
//     const something = await promiseToDoSomething()
//     return something + ' and I watched'
//   }
//   const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
//     const something = await watchOverSomeoneDoingSomething()
//     return something + ' and I watched as well'
//   }
//   watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
//     console.log(res)
//   })

// let chuck = {
//     firstName: 'Chuck',
//     lastName: 'Norris',
//     birthDate: new Date('1940-03-10'),
//     jokes: [
//         'Chuck Norris counted to infinity... Twice.',
//         'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
//     ],
//     displayInfo: function () {
//         console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
//     },
//     getAge: function () {
//         let date1 = new Date()
//         let chuckYears = date1.getFullYear() - this.birthDate.getFullYear()
//         let chuckMonths = date1.getFullMonth() - this.birthDate.getFullMonth()
//         if(chuckMonths<0 || chuckMonths === 0 && date1.getDate() < birthDate.getDate())
//         let ageOfChuch = chuckYears + 
//         console.log(currentYear)
//         // TODO
//         // Hint: to get the current time, you can do: new Date()
//         // Hint: to get the birthDate, you can do: this.birthDate
//         // Hint: you can subtract 2 dates and you get the number of milliseconds
//     },
//     addJoke: function () {
//         // TODO (don't return anything)
//     },
//     getRandomJoke: function () {
//         // TODO
//     },
// }

// chuck.displayInfo();

// console.log('getAge', chuck.getAge()); // Should return 79 if you are in 2019

// chuck.addJoke('Chuck Norris can divide by zero.');
// console.log('getRandomJoke', chuck.getRandomJoke());
// chuck.addJoke('Chuck Norris kills flies with his gun.');
// console.log('getRandomJoke', chuck.getRandomJoke());
// chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
// console.log('getRandomJoke', chuck.getRandomJoke());

// chuck.displayInfo();

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

// const getFacialRec = async() => {
//     response = await
//     fetch("https://kairosapi-karios-v1.p.rapidapi.com/recognize", {
//             "method": "POST",
//             "headers": {
//                 "x-rapidapi-host": "kairosapi-karios-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "3446b20e22msh450dab4133833dbp1df991jsn087378460871",
//                 "content-type": "application/json",
//                 "accept": "application/json"
//             },
//             "body": {
//                 "image": "http://media.kairos.com/kairos-elizabeth.jpg",
//                 "gallery_name": "MyGallery"
//             }
//         })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// let randomNumber = Math.floor(Math.random() * 10)
// getFirstUserData(randomNumber)

// let i = 1
// lis = document.getElementsByTagName('li')
// for (let i = 0; i < lis.length; i++) {
//     lis[i].onclick = (e) => console.log(e);
// }

// });
// function addLi() {
//     var li = document.createElement("li");
//     var textli = document.createTextNode("item number " + i);
//     li.appendChild(textli);
//     document.getElementsByClassName("list")[0].appendChild(li);
//     document.getElementById('title').style.fontSize = i * 2 + "px"
//     console.log("d");
//     i++
// }

// let myModule = (() => {
//     var _privateProp = "hello"
//     var _otraprop = [123, 32]
//     _privateMethod = () => {
//         console.log(_privateProp)
//     }
//     _anotherMethod = () => {
//         console.log(_otraprop +" "+ _privateProp);
//     }
//     return {
//         publicMethod() {
//             _privateMethod()
//         },
//         anotherMethod() {
//             _anotherMethod()
//         }
//     }
// })()