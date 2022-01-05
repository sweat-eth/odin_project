function computerPlay() {
  let rand = Math.random() * 3;
  let seed = Math.floor(rand);

  let options = ['rock', 'paper', 'scissors'];

  return options[seed];
}

function playRound(playerSelection, computerSelection) {

  let result;

  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection == 'rock') {
        result = 'It\'s a tie! 2 rocks cancel out.'
      } else if (computerSelection == 'paper') {
        result = 'You lose! Paper beats rock.'
      } else if (computerSelection == 'scissors') {
        result = 'You win! Rock beats scissors!'
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        result = 'You win! Paper beats rock!'
      } else if (computerSelection == 'paper') {
        result = 'It\'s a tie! 2 papers cancel out.'
      } else if (computerSelection == 'scissors') {
        result = 'You lose! Scissors beats paper.'
      }
      break;
    case 'scissors':
      if (computerSelection == 'rock') {
        result = 'You lose! Rock beats paper.'
      } else if (computerSelection == 'paper') {
        result = 'You win! Scissors beats paper!'
      } else if (computerSelection == 'scissors') {
        result = 'It\'s a tie! 2 scissors cancel out.'
      }
      break;
  }
  return result;
}

function game() {
  let winCount = 0;
  let lossCount = 0;

  while (winCount < 5 && lossCount < 5) {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Rock, Paper, or Scissors?')
    let result = playRound(playerSelection, computerSelection);

    if (result.includes('win')) {
      winCount++;
    } else if (result.includes('tie')) {

    } else {
      lossCount++;
    };

    console.log(result + ` The score is ${winCount} to ${lossCount}`);

  };

  console.log('Game Over!')
};

game();
