function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.getElementById('content');

  // paragraphArray takes the paragraph and turns it into an array with the split method and returns each word with an index inside of the array.
  let paragraphArray = paragraph.split(' ');

  let selectButton = document.createElement('select');
  selectButton.setAttribute('id', 'selectID');
  content.appendChild(selectButton);

  // itirating through the list of colours and returning it in the select bar as an option to choose a colour from.
  colours.map (colour => {
    let option = document.createElement('option');
    option.textContent = colour;
    return selectButton.appendChild(option);
  });

  let pTag = document.createElement("p");
  content.appendChild(pTag);

  // This step returns the array with each word wraped with a span wrapped around it and styled in CSS to look like a paragraph.
  paragraphArray.map (word => {
    let span = document.createElement('span');
    span.setAttribute('class', 'span-tag');
    span.textContent = word;
    return pTag.appendChild(span);
  })
  console.log(content);
}

// Adding an event listener to my spans tag in the paragraph.
let getSelectID = document.getElementById("selectID");
let getSpanClass = document.getElementsByClassName('span-tag');

console.log(getSelectID);
// getSpanClass.addEventListener("click", () => {
//   let getValue = getSelectID.value;
//   span.style.backgroundColor = getValue;
// });

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["none", "yellow", "green", "blue"];

highlightWords(paragraph, colours);