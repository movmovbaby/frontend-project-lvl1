import gameLoop from '../index.js';
import generateRandomInt from '../utils.js';
import greetings from '../cli.js';

const task = 'What is the result of the expression?';

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
  switch (op) {
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
  const playerName = greetings();
  console.log(task);
  gameLoop(generateExpression, evaluateExpression, playerName);
};

export default playCalc;
