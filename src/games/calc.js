import { generateRandomInt, getGameData } from '../utils.js';
import { gameLoop } from '../index.js';

const TASK = 'What is the result of the expression?';

const generateExpression = () => {
  const operations = ['+', '-', '*'];
  const leftOperand = generateRandomInt();
  const rightOperand = generateRandomInt();
  const operation = operations[generateRandomInt(0, operations.length)];

  return `${leftOperand} ${operation} ${rightOperand}`;
};

const evaluateExpression = (expr) => {
  let result = 0;
  const [leftOperand, operation, rightOperand] = expr.split(' ');
  switch (operation) {
    case '+':
      result = Number(leftOperand) + Number(rightOperand);
      break;
    case '-':
      result = Number(leftOperand) - Number(rightOperand);
      break;
    case '*':
      result = Number(leftOperand) * Number(rightOperand);
      break;
    default:
      console.log('Unknown operation');
      break;
  }
  return String(result);
};

const playCalc = () => {
  const gameData = getGameData(generateExpression, evaluateExpression);
  gameLoop(gameData, TASK);
};

export default playCalc;
