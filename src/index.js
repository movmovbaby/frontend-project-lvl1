import readlineSync from 'readline-sync';

const correctMessage = 'Correct!';
const numberOfGames = 3;

const displayString = (str) => console.log(str);

const gameLoop = (problemGenerator, problemSolver, playerName, rounds = numberOfGames) => {
  let currentRound = 0;
  let answer = '';
  let userAnswer = '';
  let returnString = '';

  while (currentRound !== rounds) {
    const problem = problemGenerator();
    const question = `Question: ${problem}`;
    displayString(question);
    answer = problemSolver(problem);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      displayString(correctMessage);
      currentRound += 1;
    } else {
      returnString = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`;
      displayString(returnString);
      return;
    }
  }

  returnString = `Congratulations, ${playerName}!`;
  displayString(returnString);
};

export {
  gameLoop,
  displayString,
};
