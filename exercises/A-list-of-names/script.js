let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let createH1 = document.createElement("h1");
    let createH2 = document.createElement("h2");
    content.appendChild(createH1);
    content.appendChild(createH2);
    createH1.innerText = `${arrayOfPeople[i].name}`;
    createH2.innerText = `${arrayOfPeople[i].job}`;
  }
}

listOfNames(people);
