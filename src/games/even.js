import { gameLoop, displayString } from "../index.js";

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
let numberOfGames = 3;

const generateNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const even = (number) => {
  if (isEven(number)) {
    return 'yes';
  } else {
    return 'no';
  }
};

const playEven = (playerName) => {
  displayString(task);
  gameLoop(generateNumber, even, numberOfGames, playerName);
};

export default playEven;

/* const playIsEven = (name) => {
  let number;
  let answer;
  let userAnswer;
  let returnString = '';

  displayString(greetingString);

  while (gamesCounter !== 0) {
    number = generateNumber();
    const question = `Question: ${number}`;
    displayString(question);

    answer = isEven(number);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      displayString(correctMessage);
      gamesCounter -= 1;
      if (gamesCounter === 0) {
        returnString = `Congratulations, ${name}`;
        displayString(returnString);
      }
    } else {
      gamesCounter = 0;
      returnString = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`;
      displayString(returnString);
    }
  }
}; */
