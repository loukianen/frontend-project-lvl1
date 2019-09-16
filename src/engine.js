import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (gameTask, game) => {
  const correctAnswersCount = 3;
  const getPairFuncion = game;
  const isAnswersCorrect = (counter) => {
    if (counter >= correctAnswersCount) return true;
    const pairQwestionAnswer = getPairFuncion();
    const question = car(pairQwestionAnswer);
    const correctAnswer = String(cdr(pairQwestionAnswer));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      console.log();
      return isAnswersCorrect(counter + 1);
    }
    console.log();
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  if (isAnswersCorrect(0) === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
  return console.log();
};
