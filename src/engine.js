import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const correctAnswersCount = 3;
export default (gameDescription, game) => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  const getGameResult = (counter) => {
    if (counter >= correctAnswersCount) return console.log(`Congratulations, ${userName}!`);
    const qwestionAnswer = game();
    const question = car(qwestionAnswer);
    const correctAnswer = String(cdr(qwestionAnswer));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      console.log();
      return getGameResult(counter + 1);
    }
    console.log();
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${userName}!`);
  };
  getGameResult(0);
};
