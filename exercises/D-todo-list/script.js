function todoList(todosArr) {
  // Write your code here...
  let content = document.getElementById('content'); // getting the div tag by its Id in the HTML dom.
  let createUl = document.createElement('ul'); // creating a unordered list.
  content.appendChild(createUl); // appending the ul to the div.
  
  
  for (let i = 0; i < todos.length; i++) {
    
    let createLi = document.createElement('li'); // creating a list tag.
    createUl.appendChild(createLi); // appending child to the unordered list.
    createLi.innerText = todos[i].todo; // adding the todo list to the li tag.
     // creating the first button to  the list that will either mark the work as done or undo it with a strike through. the 2nd button will pop the li off from the list once its pushed.
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button"); 
    // appending the first and second button to the list.
    createLi.appendChild(btn1); 
    createLi.appendChild(btn2);
    // giving names to the first and second button on the list.
    btn1.innerText = "Done"; // 
    btn2.innerText = "Delete";

    // styling the list.
    createLi.style.backgroundColor = "lightgreen"
    createLi.style.paddingLeft = "10px";
    createLi.style.marginBottom = "10px";

    // styling the buttons.
    btn1.style.margin = "10px";
    btn1.style.color = "blue";
    btn1.style.backgroundColor = "yellow";
    btn1.style.fontWeight = "700";
    btn2.style.fontWeight = "700";
    btn1.style.padding = "2px, 4px";
    btn2.style.padding = "2px, 4px";
    btn1.style.border = "none";
    btn2.style.border = "none";
    btn2.style.backgroundColor = "red";

    btn1.addEventListener('click', function (e) {
      createLi = e.target;
      if (createLi.style.backgroundColor === "lightgreen" && btn1.innerText === "Done") {
        createLi.style.backgroundColor= "red" && btn1.innerText === "Undo";
      }
      else if (createLi.style.textDecoration === "line-through") {
        createLi.style.textDecoration = "none";
      }
    }
    createLi.addEventListener("click", strike)
  }
console.log(content);
}




// bnt1.forEach (function () {
//   btn1.addEventListener('click', function (e) {
//     createLi = e.target;
//     if (createLi.style.backgroundColor === "lightgreen" && btn1.innerText === "Done") {
//       createLi.style.backgroundColor= "red" && btn1.innerText === "Undo";
//     }
//   })
// })

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);