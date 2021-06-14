const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("div #greeting");
const clockForm = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");
const clockGreetingBox = document.querySelector(".clockGreetingGroup");
const FADEINANI__INIT = "fadeinInit";
const FADEINANI__FIN = "fadeinFin";
const FADEOUTANI__INIT = "fadeOutInit";
const FADEOUTANI__FIN = "fadeOutFin";

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(FADEOUTANI__INIT);
setTimeout(function () {
    loginForm.classList.add(FADEOUTANI__FIN);
}, 30)
setTimeout(function () {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    clockForm.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);}, 800)
}
function paintGreetings(username){
    greeting.innerText = `Hi, ${username}`;
    clockGreetingBox.classList.add(FADEINANI__INIT);
    setTimeout(function () {
        clockGreetingBox.classList.add(FADEINANI__FIN);
    }, 1000);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}

if(localStorage.getItem(USERNAME_KEY) !== null){
    clockForm.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}
