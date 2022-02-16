import gameLoop from '../index.js';
import greetings from '../cli.js';

const task = 'What is the result of the expression?';
const maxNumber = 100;

const generateExpression = () => {
  const operations = ['+', '-', '*'];
  const a = Math.floor(Math.random() * maxNumber);
  const b = Math.floor(Math.random() * maxNumber);
  const op = operations[Math.floor(Math.random() * operations.length)];

  return `${a} ${op} ${b}`;
};

const evaluateExpression = (expr) => {
  let result = 0;
  const [a, op, b] = expr.split(' ');
  switch (op) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
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
