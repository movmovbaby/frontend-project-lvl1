import readlineSync from 'readline-sync';

const greetings = 'Welcome to the Brain Games!';
const correctMessage = 'Correct!';

const displayString = (str) => console.log(str);

const getPlayerName = (s) => {
  let name = readlineSync.question('May I have your name? ');
  if (s) {
    name = name + s;
  }
  return name;
};

const sayHello = (playerName) => {
  const greet = `Hello, ${playerName}!`;
  console.log(greet);
};


const gameLoop = (problemGenerator, problemSolver, rounds, playerName) => {
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
      currentRound = 3;
      returnString = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`;
      displayString(returnString);
      return;
    }
  }

  returnString = `Congratulations, ${playerName}`;
  displayString(returnString);
};

export { gameLoop, getPlayerName, sayHello, displayString };
