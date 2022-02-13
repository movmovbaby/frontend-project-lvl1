import { gameLoop, displayString } from '../index.js';

const task = 'What number is missing in the progression?';

const generateProgression = () => {
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 6);
  const missingIndex = Math.floor(Math.random() * 10);
  const range = 10;
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
