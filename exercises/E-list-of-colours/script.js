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
    select.appendChild(option);

    function chooseColour () {
      if (select[0] === 'red') {
        p.style.color = 'red';
      }
      else if (select[1] === 'blue') {
        p.style.color = 'blue';
      }
      else if (select[2] === 'green') {
        p.style.color = 'green';
      }
      else if (select[3] === 'yellow') {
        p.style.color = 'yellow';
      }
      else if (select[4] === 'pink') {
        p.style.color = 'pink';
      }
      else if (select[5] === 'brown') {
        p.style.color = 'brown';
      }
    }
    select.addEventListener('click', chooseColour);
   })
   .map ((colour) => colour[0]);

   
 
  console.log(content);
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
