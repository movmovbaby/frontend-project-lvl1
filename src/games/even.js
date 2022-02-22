import { generateRandomInt, getGameData } from '../utils.js';
import gameLoop from '../index.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const isEvenToString = (number) => {
  if (isEven(number)) {
    return 'yes';
  }

  return 'no';
};

const playEven = () => {
  const gameData = getGameData(generateRandomInt, isEvenToString);
  gameLoop(gameData, TASK);
};

export default playEven;
