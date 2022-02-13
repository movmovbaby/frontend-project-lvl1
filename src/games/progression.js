import { gameLoop, displayString } from '../index.js';

const task = 'What number is missing in the progression?';
const maxStartNumber = 10;
const maxStep = 6;

const generateProgression = () => {
  const start = Math.floor(Math.random() * maxStartNumber);
  const step = Math.floor(Math.random() * maxStep);
  const range = 10;
  const missingIndex = Math.floor(Math.random() * range);
  const progression = [];

  for (let i = 0; i < range; i += 1) {
    progression[i] = start + step * i;
  }

  progression[missingIndex] = '..';

  return progression;
};

const findMissingItem = (progression) => {
  const missingIndex = progression.indexOf('..');
  const start = progression[0];
  const step = progression[1] - progression[0];
  const answer = start + step * missingIndex;
  return answer;
};

const findMissingItemWrapper = (progression) => {
  const number = findMissingItem(progression);
  return String(number);
};

const playProgression = (playerName) => {
  displayString(task);
  gameLoop(generateProgression, findMissingItemWrapper, playerName);
};

export default playProgression;
