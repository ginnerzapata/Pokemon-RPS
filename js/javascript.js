//caching the DOM

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const chatbox = document.getElementById('chat');
const chatText = document.querySelector('#chat > p');

//pokemons
const charmander_div = document.getElementById("c");
const bulbasaur_div = document.getElementById("b");
const squirtle_div = document.getElementById("s");

function getComputerChoise() {
  const choises = ['c','b','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}
//the game
function convertToWord(letter) {
  if (letter === 'c') return "Charmander";
  if (letter === 'b') return "Bulbasaur";
  return "Squirtle"
};
function win(userChoice, computerChoise) {
  ++userScore;
  userScore_span.innerHTML = userScore;
  chatText.innerHTML = `<h2>You won</h2> ${convertToWord(userChoice)} defeats ${convertToWord(computerChoise)}`;
}
function lose(userChoice, computerChoise) {
  ++computerScore;
  computerScore_span.innerHTML = computerScore;
  chatText.innerHTML = `<h2>You lost</h2> ${convertToWord(userChoice)} loses to ${convertToWord(computerChoise)}`;
}
function draw(userChoice, computerChoise) {
  chatText.innerHTML = `<h2>It's a Draw</h2> ${convertToWord(userChoice)} equals ${convertToWord(computerChoise)}`;
}
function game(userChoice) {
  const computerChoise = getComputerChoise();
  switch(userChoice + computerChoise) {
    case 'cb':
    case 'bs':
    case 'sc':
      win(userChoice, computerChoise);
      break;
    case 'cs':
    case 'sb':
    case 'bc':
      lose(userChoice, computerChoise);
      break;
    case 'cc':
    case 'bb':
    case 'ss':
      draw(userChoice, computerChoise);
      break;
  }
}

function main() {
  charmander_div.addEventListener('click', function(){
    game('c');
  })

  bulbasaur_div.addEventListener('click', function(){
    game('b');
  })

  squirtle_div.addEventListener('click', function(){
    game('s');
  })
}

main();