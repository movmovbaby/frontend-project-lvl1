import { gameLoop, displayString } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;

const generateNumbers = () => {
  const a = Math.floor(Math.random() * maxNumber);
  const b = Math.floor(Math.random() * maxNumber);
  return `${a} ${b}`;
};

const gcd = (a, b) => {
  let la = a;
  let lb = b;
  while (la !== 0 && lb !== 0) {
    if (la > lb) {
      la %= lb;
    } else {
      lb %= la;
    }
  }

  return la + lb;
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
