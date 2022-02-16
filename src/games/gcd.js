import gameLoop from '../index.js';
import generateRandomInt from '../utils.js';
import greetings from '../cli.js';

const task = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const a = generateRandomInt();
  const b = generateRandomInt();
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
  console.log(task);
  gameLoop(generateNumbers, gcdWrapper, playerName);
};

export default playGcd;
