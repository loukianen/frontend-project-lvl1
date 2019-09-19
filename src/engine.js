import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (gameRules, game) => {
  const correctAnswersCount = 3;
  const getGameResult = (counter) => {
    if (counter >= correctAnswersCount) return true;
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
    return false;
  };
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  if (getGameResult(0) === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
  return console.log();
};
