const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("button") submit으로 대체할 수 있음
const greeting = document.querySelector("#greeting");
const signOutBtn = document.querySelector("#signout");

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   console.log(username);
//   // if (username === "") {
//   //   alert("Please write your name");
//   // } else if (username.length > 15) {
//   //   alert("Your name is too long");
//   // } required와 maxlenght로 대체할 수 있다.
// }

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  signOutBtn.classList.remove(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //paintGreeings(username); //user를 함수에 argument로 보내도된다.
  paintGreeings();
}

function handleSignOut() {
  localStorage.removeItem(USERNAME_KEY);
  //console.log(localStorage.getItem(USERNAME_KEY));

  greeting.classList.add(HIDDEN_CLASSNAME);
  signOutBtn.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = ``;

  todoForm.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.add(HIDDEN_CLASSNAME);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
  //savedUserName = localStorage.getItem(USERNAME_KEY);

  loginForm.addEventListener("submit", onLoginSubmit);
}



function paintGreeings() { //user를 파라미터로 받아도 된다.
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);

  signOutBtn.addEventListener("click", handleSignOut);
}

//localstorage에 username을 저장함
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //이벤트 리스너를 여기로 옮겨준다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreeings();
}