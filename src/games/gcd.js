import { gameLoop, displayString } from '../index.js';
import generateNumber from '../utils.js';
import greetings from '../cli.js';

const task = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const generateNumbers = () => {
  const a = generateNumber();
  const b = generateNumber();
  return `${a} ${b}`;
};

const gcd = (a, b) => {
  let local_a = a;
  let local_b = b;
  while (local_a !== 0 && local_b !== 0) {
    if (local_a > local_b) {
      local_a %= local_b;
    } else {
      local_b %= local_a;
    }
  }

  return local_a + local_b;
};

const gcdWrapper = (str) => {
  const [a, b] = str.split(' ');
  const result = gcd(Number(a), Number(b));
  return String(result);
};

const playGcd = () => {
  const playerName = greetings();
  displayString(task);
  gameLoop(generateNumbers, gcdWrapper, playerName);
};

export default playGcd;
