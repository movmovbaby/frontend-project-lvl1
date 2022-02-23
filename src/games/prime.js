import { generateRandomInt, getGameData } from '../utils.js';
import gameLoop from '../index.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeToString = (number) => {
  const text = isPrime(number) ? 'yes' : 'no';
  return text;
};

const playPrime = () => {
  const gameData = getGameData(generateRandomInt, isPrimeToString);
  gameLoop(gameData, TASK);
};

export default playPrime;
