let list = document.getElementById("todo-list");
list.innerHTML = '';

document.getElementById("btn-primary").addEventListener('click', addNewTodo);

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

const addLineThrough = () => {
  let getSpanWrapNone = document.getElementsByClassName("span-wrap-decoration-none");
  let getSpanWrapLine = document.getElementsByClassName("span-wrap-decoration-line");

  getSpanWrapNone ? getSpanWrapLine : getSpanWrapNone;
}

const getCheckBtn = document.getElementsByClassName("fa fa-check");
getCheckBtn.addEventListener('click', addLineThrough());

const createListElement = (element) => {
  let Li = document.createElement("li");
  let spanWrap = document.createElement("span");
  let span = document.createElement("span");
  let checkBtn = document.createElement("i");
  let trashBtn = document.createElement("i");
  spanWrap.innerText = element.task;
  console.log(Li);

  Li.setAttribute("class", "list-group-item");
  spanWrap.setAttribute("class", "span-wrap-decoration-line");
  spanWrap.setAttribute("class", "span-wrap-decoration-none");
  span.setAttribute("class", "badge bg-primary rounded-pill");
  checkBtn.setAttribute("class", "fa fa-check");
  checkBtn.setAttribute("aria-hidden", "true") 
  trashBtn.setAttribute("class", "fa fa-trash");
  trashBtn.setAttribute("aria-hidden", "true");

  list.appendChild(Li);
  Li.appendChild(spanWrap);
  Li.appendChild(span);
  span.appendChild(checkBtn);
  span.appendChild(trashBtn);

}

// This function creates my list of to-dos and display in on the screen.
function populateTodoList(todos) {
  todos.forEach(element => createListElement(element)); 
}

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  
  let addToDo = document.getElementById("todoInput");
  let newElement = { task: `${addToDo.value}`, completed: false};
  todos.push(newElement);
  createListElement(newElement);
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
