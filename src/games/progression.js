import greetings from '../cli.js';
import generateRandomInt from '../utils.js';
import gameLoop from '../index.js';

const TASK = 'What number is missing in the progression?';
const RANGE = 10;

const generateProgression = () => {
  const start = generateRandomInt(0, 10);
  const step = generateRandomInt(2, 10);
  const missingIndex = generateRandomInt(2, RANGE);
  const progression = [];

  for (let i = 0; i < RANGE; i += 1) {
    progression[i] = start + step * i;
  }

  progression[missingIndex] = '..';

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

const findMissingItemWrapper = (progression) => {
  const number = findMissingItem(progression);
  return String(number);
};

const playProgression = () => {
  const playerName = greetings();
  console.log(TASK);
  gameLoop(generateProgression, findMissingItemWrapper, playerName);
};

export default playProgression;
