import gameLoop from '../index.js';
import generateRandomInt from '../utils.js';
import greetings from '../cli.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeToString = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const playPrime = () => {
  const playerName = greetings();
  console.log(TASK);
  gameLoop(generateRandomInt, isPrimeToString, playerName);
};

export default playPrime;
