import readlineSync from 'readline-sync';


export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greet = `Hello, ${name}!`;
  console.log(greet);
}
