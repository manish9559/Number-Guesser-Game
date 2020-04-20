let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const getAbsoluteDistance = (num1, num2) =>{
  if(num1>9 || num2>9)
    alert('Number is out of range!');
  return Math.abs(num1 - num2);
}
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = getAbsoluteDistance(humanGuess,targetGuess);
  const computerDifference = getAbsoluteDistance(computerGuess,targetGuess);
  if(humanDifference === computerDifference)
  	return true;
  else if(humanDifference < computerDifference)
  	return true;
  else
  	return false;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
