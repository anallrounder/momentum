const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //localStorage.setItem("todos", toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  //console.log(li.id); //삭제버튼을 누르면 그 아이디값을 알 수 있다.
  li.remove();
  console.log(typeof li.id); //String!!! 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();//한 번 더 불러와야 함
}

function paintToDo(newToDo) {
  //console.log("i will pain ", newToDo);
  const li = document.createElement("li");
  li.id = newToDo.id; //id를 html에 표시해준다.
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.className = "deltetodo";
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  //console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  console.log(newTodo, toDoInput.value);
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos) { //(savedToDos !== null)이렇게 쓸 수도 있다.
  //localstorage에서 온 string을 살아있는 javascript object로 변환시킨다.
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //이렇게 해야 새로고침시 배열이 비어있지 않게 된다.
  console.log(parsedToDos);
  // parsedToDos.forEach(sayHello);
  //위에 sayHello 함수 안쓰고 이렇게 짧게 쓸 수 있다. arrow function!
  // parsedToDos에 있는각각의item에 대해서 console.log할거라는 의미이다.
  //parsedToDos.forEach((item)) => console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo);
}
