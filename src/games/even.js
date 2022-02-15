import { gameLoop, displayString } from '../index.js';
import generateNumber from '../utils.js';
import greetings from '../cli.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

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

const playEven = () => {
  const playerName = greetings();
  displayString(task);
  gameLoop(generateNumber, even, playerName);
};

export default playEven;
