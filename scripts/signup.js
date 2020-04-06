let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementById('sign-up-btn')
let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    deleteErrors();

    if (checkValidUser()) {
      
        createUser(userName.value, email.value, password.value, score = 0, currentUser = true)
        let div = document.createElement("div")
        div.innerHTML = `<p class="info-text" href="game.html"> Welcome ${userName.value} <a class="info-text" href="game.html"> Let's kill Some Dictators</a></p>`
        form.insertBefore(div, signUpButton)

    };
})

function checkValidUser() {
    let signUpValidator = new SignUpValidator(userName.value, email.value, password.value, repeatPassword.value);

    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if (!signUpValidator.checkUserName()) {
        signUpValidator.errorCreator("Insert valid UserN4m3_", userName)
        validUser = false
    }
    if (!signUpValidator.checkEmail()) {
        signUpValidator.errorCreator("Valid eM@ail insert - please", email)
        validUser = false
    }
    if (!signUpValidator.checkPassword()) {
        signUpValidator.errorCreator("Insert Valid Passw0rd", password)
        validUser = false
    }
    if (!signUpValidator.checkRepeatPassword()) {
        signUpValidator.errorCreator("No match betweee3n Pass", repeatPassword)
        validUser = false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)) {
        signUpValidator.errorCreator("M@il already register3d", email)
        validUser = false
    }

    return validUser
}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser(name, email, password) {
    const newUser = new User(name, email, password, score, currentUser)

    if (usersDB) {
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
}