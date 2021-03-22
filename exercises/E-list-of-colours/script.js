function listOfColours(coloursArr) {
  // Write your code here...
  let content = document.getElementById('content');
  let createPTag = document.createElement('p');
  createPTag.innerText = "You have selected: ";
  content.appendChild(createPTag);
  let select = document.createElement('select');
  createPTag.appendChild(select);
  
   let chooseColourOfArray = coloursArr.filter ((colour) => {
    let option = document.createElement('option');
    option.textContent = colour;
    option.value = colour;
    select.appendChild(option);

    function chooseColour () {
      if (option.value === 'red') {
        createPTag.style.color = 'red';
      }
      else if (option.value === 'blue') {
        createPTag.style.color = 'blue';
      }
      else if (option.value === 'green') {
        createPTag.style.color = 'green';
      }
      else if (option.value === 'yellow') {
        createPTag.style.color = 'yellow';
      }
      else if (option.value === 'pink') {
        createPTag.style.color = 'pink';
      }
      else if (option.value === 'brown') {
        createPTag.style.color = 'brown';
      }
    }
    select.addEventListener('click', chooseColour);
   })
   .map ((colour) => colour[0]);

   
 
  console.log(content);
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
