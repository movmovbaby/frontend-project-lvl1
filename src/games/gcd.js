import { gameLoop, displayString } from '../index.js';
import generateNumber from '../utils.js';
import greetings from '../cli.js';

const task = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const a = generateNumber();
  const b = generateNumber();
  return `${a} ${b}`;
};

const gcd = (a, b) => {
  let localA = a;
  let localB = b;
  while (localA !== 0 && localB !== 0) {
    if (localA > localB) {
      localA %= localB;
    } else {
      localB %= localA;
    }
  }

  return localA + localB;
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
