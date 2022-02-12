import { gameLoop, displayString } from "../index.js";



const task = 'What is the result of the expression?';
let numberOfGames = 3;

const generateExpression = () => {
  const operations = ['+', '-', '*'];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
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

const playCalc = (playerName) => {
  displayString(task);
  gameLoop(generateExpression, evaluateExpression, numberOfGames, playerName);
};






export default playCalc;
