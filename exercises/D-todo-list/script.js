function todoList(todosArr) {
  // Write your code here...
  let content = document.getElementById("content");
  let creatUl = document.createElement("ul");
  content.appendChild(creatUl);
  for (let task in todosArr) {
    let createLi = document.createElement("li");
    creatUl.appendChild(createLi);
    createLi.textContent = todosArr[task].todo;
    console.log(createLi.style.textDecoration);
    function strike() {
      if (createLi.style.textDecoration !== "line-through") {
        createLi.style.textDecoration = "line-through";
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