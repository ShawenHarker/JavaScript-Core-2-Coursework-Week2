/* Part 1

 Getting targetted elements via their ids I inputted myself in the HTML.
 */
let jumbotron = document.getElementById("jumbotron-id");
let donateButton = document.getElementById("btn btn-primary btn-lrg-id");
let volunteerButton = document.getElementById("btn btn-secondary btn-lrg-id");

// Getting the buttons with their ids which was supplied to me.
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

// Adding an event listener to each button as spicified in the README.md file, giving each button its own unique style. 
blueButton.addEventListener('click', () => {
    jumbotron.style.backgroundColor = `#588fbd`;
    donateButton.style.backgroundColor = `#ffa500`;
    volunteerButton.style.backgroundColor = 'black';
    volunteerButton.style.color = 'white';
});

orangeButton.addEventListener('click', () => {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateButton.style.backgroundColor = `#5751fd`;
  volunteerButton.style.backgroundColor = `#31b0d5`;
  volunteerButton.style.color = 'white';
});

greenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateButton.style.backgroundColor = `black`;
  volunteerButton.style.backgroundColor = `#8c9c08`;
  volunteerButton.style.color = "white";
});

//____________________________________________________________________//

/* Part 2

Getting targetted elements via their ids I inputted myself in the HTML.
*/

// This function takes the validate functions, checks that it does validate and returns an alert message or a red background warning.
function submitForm (event) {

  event.preventDefault();
  event.stopPropagation();

  let returnForm = validate();

  if (returnForm) {
    document.getElementById('form-user').alert('Thank you for filing in the form.');
  }
  else {
    document.getElementsByClassName('form-control').style.backgroundColor = 'red';
  }
}

// This function checks and validates all the values of the different input fields
function validate () {
  let checkEmail = document.getElementById('exampleInputEmail1');
  let checkName = document.getElementById('example-text-input');
  let checkTextArea = document.getElementById('exampleTextarea');

  console.log(checkEmail);
  if (checkEmail > 1) {
    return true;
  }
  else {
    return false;
  }
}

document.getElementById('btn btn-primary-id').addEventListener('click', submitForm);

validate();