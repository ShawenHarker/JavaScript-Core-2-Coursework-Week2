// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  
  let addToDo = document.getElementById("todoInput");
  addToDo.value = " ";
  if (addToDo.length > 1) {
    todos.push({ task: `${addToDo.value}`, completed: false});
  }
}

document.getElementById("btn-primary").addEventListener('click', addNewTodo);

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    let listLiTag = document.createElement("li");
    listLiTag.setAttribute("class", "list-group-item");
    listLiTag.innerText = todos[i].task;
    list.appendChild(listLiTag);
    let checkButton = document.createElement('button');
    checkButton.setAttribute('id', 'primary-done-button')
    listLiTag.appendChild(checkButton);
    checkButton.textContent = "Done";
    console.log(checkButton);
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "primary-delete-button");
    listLiTag.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
  }
}

populateTodoList(todos);

document.getElementById("primary-done-button").addEventListener('click', function () {
  let listLiTag = document.getElementsByClassName("list-group-item");
  if (listLiTag.style.textDecoration = "none") {
    listLiTag.style.textDecoration = "lineThrough";
  }
  return listLiTag.style.textDecoration = "none";
});



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
