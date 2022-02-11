import readlineSync from 'readline-sync';

const greetingString = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctMessage = 'Correct!';
let gamesCounter = 3;

const displayString = (str) => {
  console.log(str);
};

const generateNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const playIsEven = (name) => {
  let number;
  let answer;
  let userAnswer;
  let returnString = '';

  displayString(greetingString);

  while (gamesCounter !== 0) {
    number = generateNumber();
    const question = `Question: ${number}`;
    displayString(question);

    answer = isEven(number);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      displayString(correctMessage);
      gamesCounter -= 1;
      if (gamesCounter === 0) {
        returnString = `Congratulations, ${name}`;
        displayString(returnString);
      }
    } else {
      gamesCounter = 0;
      returnString = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`;
      displayString(returnString);
    }
  }
};

export default playIsEven;
