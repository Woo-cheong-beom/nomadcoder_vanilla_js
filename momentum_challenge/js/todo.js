const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");
const TODO_KEY = "toDos";

let toDos = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const deleting = event.target.parentElement;
  deleting.remove();
  console.log(deleting.id);
  toDos = toDos.filter((todo) => todo.id !== parseInt(deleting.id));
  saveTodo();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const DelBtn = document.createElement("button");
  DelBtn.id = "delBtn";
  DelBtn.innerText = "❌";
  DelBtn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(DelBtn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = " ";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
