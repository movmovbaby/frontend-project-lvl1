import { generateRandomInt, getGameData } from '../utils.js';
import { gameLoop } from '../index.js';

const TASK = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const a = generateRandomInt();
  const b = generateRandomInt();
  return `${a} ${b}`;
};

const computeGcd = (a, b) => {
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

const computegcdToString = (str) => {
  const [a, b] = str.split(' ');
  const result = computeGcd(Number(a), Number(b));
  return String(result);
};

const playGcd = () => {
  const gameData = getGameData(generateNumbers, computegcdToString);
  gameLoop(gameData, TASK);
};

export default playGcd;
