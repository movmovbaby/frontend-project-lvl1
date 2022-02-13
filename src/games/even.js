import { gameLoop, displayString } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 100;

const generateNumber = () => Math.floor(Math.random() * maxNumber);

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const even = (number) => {
  if (isEven(number)) {
    return 'yes';
  }

  return 'no';
};

const playEven = (playerName) => {
  displayString(task);
  gameLoop(generateNumber, even, playerName);
};

export default playEven;
