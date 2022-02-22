import { generateRandomInt, getGameData } from '../utils.js';
import gameLoop from '../index.js';

const TASK = 'What number is missing in the progression?';
const RANGE = 10;

const generateProgression = (start, step, range) => {
  const progression = [];
  for (let i = 0; i < range; i += 1) {
    progression[i] = start + step * i;
  }

  return progression.join(' ');
};

const findMissingItem = (progression) => {
  const progressionArray = progression.split(' ');
  const missingIndex = Number(progressionArray.indexOf('..'));
  const start = Number(progressionArray[0]);
  const step = Number(progressionArray[1]) - Number(progressionArray[0]);
  const answer = start + step * missingIndex;
  return answer;
};

const findMissingItemToString = (progression) => {
  const number = findMissingItem(progression);
  return String(number);
};

const gameProgression = () => {
  const start = generateRandomInt(0, 10);
  const step = generateRandomInt(2, 10);
  const missingIndex = generateRandomInt(2, RANGE);
  const progression = generateProgression(start, step, RANGE);

  const progressionArray = progression.split(' ');
  progressionArray[missingIndex] = '..';
  return progressionArray.join(' ');
};

const playProgression = () => {
  const gameData = getGameData(gameProgression, findMissingItemToString);
  gameLoop(gameData, TASK);
};

export default playProgression;
