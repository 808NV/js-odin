function getComputerChoice() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber > 0 && randomNumber <= 1/3) {
        computerMove = 'rock';
    } 
    else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'paper';
    } 
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissor';
    }
    return computerMove
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();

    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            result = 'tie';
        }
        else if (playerSelection === 'paper') {
            result = 'you win';
        }
        else if (playerSelection === 'scissor') {
            result = 'you lose';
        }
    }

    if (computerSelection === 'paper') {
        if (playerSelection === 'paper') {
            result = 'tie';
        }
        else if (playerSelection === 'rock') {
            result = 'you lose';
        }
        else if (playerSelection === 'scissor') {
            result = 'you win';
        }
    }

    if (computerSelection === 'scissor') {
        if (playerSelection === 'scissor') {
            result = 'tie';
        }
        else if (playerSelection === 'rock') {
            result = 'you win';
        }
        else if (playerSelection === 'paper') {
            result = 'you lose';
        }
    }
    alert(`you picked ${playerSelection}, computer picked ${computerSelection}, result: ${result}`);
}



/*function oneRound(computerSelection, playerSelection ) {
    let result = '';

    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            result = 'tie';
        }
        else if (playerSelection === 'paper') {
            result = 'you win';
        }
        else if (playerSelection === 'scissor') {
            result = 'you lose';
        }
    }

    if (computerSelection === 'paper') {
        if (playerSelection === 'paper') {
            result = 'tie';
        }
        else if (playerSelection === 'rock') {
            result = 'you lose';
        }
        else if (playerSelection === 'scissor') {
            result = 'you win';
        }
    }

    if (computerSelection === 'scissor') {
        if (playerSelection === 'scissor') {
            result = 'tie';
        }
        else if (playerSelection === 'rock') {
            result = 'you win';
        }
        else if (playerSelection === 'paper') {
            result = 'you lose';
        }
    }
    return result
}*/

