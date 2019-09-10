import readlineSync from 'readline-sync';
import { car, cdr } from './pairs';

export default (gameTask, numberAnswers, getPairFunc) => {
  const isAnswersCorrect = (counter, numAnswers, getPairF) => {
    if (counter >= numAnswers) return true;
    const pairQwestionAnswer = getPairF();
    const question = car(pairQwestionAnswer);
    const correctAnswer = String(cdr(pairQwestionAnswer));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      console.log();
      return isAnswersCorrect(counter + 1, numAnswers, getPairF);
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
  const result = isAnswersCorrect(0, numberAnswers, getPairFunc) ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
  console.log(result);
  console.log();
};
