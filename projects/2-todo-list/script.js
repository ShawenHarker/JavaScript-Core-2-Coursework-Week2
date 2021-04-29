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
  if (addToDo.value.length > 0) {
    todos.push({ task: `${addToDo.value}`, completed: false});
  }
  populateTodoList(todos);
  addToDo.value = '';
}

document.getElementById("btn-primary").addEventListener('click', addNewTodo);

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = '';
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    let listLiTag = document.createElement("li");
    listLiTag.setAttribute("class", "list-group-item");
    listLiTag.innerText = todos[i].task;
    list.appendChild(listLiTag);

    let checkButton = document.createElement('button');
    checkButton.setAttribute('id', 'primary-done-button');
    listLiTag.appendChild(checkButton);
    let checkSpanTag = document.createElement('span');
    checkSpanTag.setAttribute("class", "badge bg-primary rounded-pill-0");
    let checkIbutton = document.createElement('i');
    checkIbutton.setAttribute("class", "fa fa-check");
    checkIbutton.setAttribute("aria-hidden", 'true');
    checkSpanTag.appendChild(checkIbutton);
    checkButton.appendChild(checkSpanTag);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "primary-delete-button");
    listLiTag.appendChild(deleteButton);
    let deleteSpanTag = document.createElement("span");
    deleteSpanTag.setAttribute("class", "badge bg-primary rounded-pill-1");
    let deleteIbutton = document.createElement('i');
    deleteIbutton.setAttribute("class", "fa fa-trash");
    deleteIbutton.setAttribute("aria-hidden", "true");
    deleteSpanTag.appendChild(deleteIbutton);
    deleteButton.appendChild(deleteSpanTag);
  }
}

// document.getElementById("primary-done-button").addEventListener('click', function () {
//   let listLiTag = document.getElementsByClassName("list-group-item");
//   if (listLiTag.style.textDecoration = "none") {
//     listLiTag.style.textDecoration = "lineThrough";
//   }
//   return listLiTag.style.textDecoration = "none";
// });



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
