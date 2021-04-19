let jumbotron = document.getElementById("jumbotron-id");
let donateButton = document.getElementById("btn btn-primary btn-lrg-id");
let volunteerButton = document.getElementById("btn btn-secondary btn-lrg-id");

let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

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