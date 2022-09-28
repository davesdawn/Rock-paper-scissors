const userOptions = document.querySelectorAll('button');
// console.log(userOptions);
const showUserChoice = document.getElementById('userchoice');
const showResult = document.getElementById('result');
const showComputerChoice = document.getElementById('computerchoice');
let userChoice;
let computerChoice;
let result;
 



userOptions.forEach(userOption => userOption.addEventListener('click', function(event) {
    userChoice = event.target.id;
    showUserChoice.innerHTML = userChoice;

    getComputerChoice();
    getResult();
    getResult();
})
)

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum);
    if(randomNum === 0) {
        computerChoice = 'rock';
    }
    if(randomNum === 1) {
        computerChoice = 'paper';
    }
    if(randomNum === 2) {
        computerChoice = 'scissors';
    }
    showComputerChoice.innerHTML = computerChoice;
}


function getResult() {
    if (computerChoice === userChoice){
        result = 'Play again!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You won!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Computer won';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You won!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Computer won';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Computer won';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You won!';
    }
    showResult.innerHTML = result;
}

