const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("div #greeting");
const clockForm = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    clockForm.classList.remove("hidden");
    todoForm.classList.remove("hidden");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hi, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
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
    clockForm.classList.remove("hidden");
    todoForm.classList.remove("hidden");
}
