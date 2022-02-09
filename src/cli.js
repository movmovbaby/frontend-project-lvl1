import readlineSync from 'readline-sync';

const greetings = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const sayHello = (playerName) => {
  const greet = `Hello, ${playerName}!`;
  console.log(greet);
};

export { greetings, getPlayerName, sayHello };
