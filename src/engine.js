import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const correctAnswersCount = 3;
let counter = 0;
let questionAnswer;
let question;
let correctAnswer;
let answer;
export default (gameDescription, getQuestionAnswer) => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  while (counter < correctAnswersCount) {
    questionAnswer = getQuestionAnswer();
    question = car(questionAnswer);
    correctAnswer = String(cdr(questionAnswer));
    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) break;
    console.log('Correct!');
    console.log();
    counter += 1;
  }
  if (counter === correctAnswersCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log();
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};
