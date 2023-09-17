const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value ;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText= `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const localUserName = localStorage.getItem("username");
    
if(localUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    greeting.classList.add(HIDDEN_CLASSNAME);
}
else{
    paintGreetings(localUserName);
}