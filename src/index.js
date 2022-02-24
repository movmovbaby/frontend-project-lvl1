import readlineSync from 'readline-sync';

const correctMessage = 'Correct!';
const numberOfGames = 3;

const gameLoop = (gameData, task) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);

  let currentRound = 0;

  while (currentRound !== numberOfGames) {
    const [question, answer] = gameData[currentRound];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log(correctMessage);
      currentRound += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export {
  gameLoop,
  numberOfGames,
};
