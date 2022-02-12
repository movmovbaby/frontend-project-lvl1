import { gameLoop, displayString } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  return `${a} ${b}`;
};

const gcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b = b % a;
    }
  }

  return a + b;
};

const gcdWrapper = (str) => {
  const [a, b] = str.split(' ');
  const result = gcd(Number(a), Number(b));
  return String(result);
};

const playGcd = (playerName) => {
  displayString(task);
  gameLoop(generateNumbers, gcdWrapper, playerName);
};

export default playGcd;
