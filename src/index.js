import readlineSync from 'readline-sync';

const correctMessage = 'Correct!';
const numberOfGames = 3;

const gameLoop = (gameData, task) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);

  let currentRound = 0;
  let returnString = '';

  while (currentRound !== numberOfGames) {
    const question = gameData[currentRound][0];
    console.log(`Question: ${question}`);
    const answer = gameData[currentRound][1];
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log(correctMessage);
      currentRound += 1;
    } else {
      returnString = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`;
      console.log(returnString);
      return;
    }
  }

  returnString = `Congratulations, ${playerName}!`;
  console.log(returnString);
};

export default gameLoop;
