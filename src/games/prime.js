import { gameLoop, displayString } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 500;

const generateNumber = () => Math.floor(Math.random() * maxNumber);

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeWrapper = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const playPrime = (playerName) => {
  displayString(task);
  gameLoop(generateNumber, isPrimeWrapper, playerName);
};

export default playPrime;
