import startEngine from '../engine';
import { cons } from '../pairs';
import { getRoundRandom100 } from '../getRandom';
import isPrime from '../isPrime';

export default () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const numberOfCorrectAnswers = 3;
  const getPairQuestionAnswer = () => {
    const numberStartChecking = 2;
    const question = getRoundRandom100();
    const correctAnswer = isPrime(question, numberStartChecking);
    return cons(question, correctAnswer);
  };
  return startEngine(gameTask, numberOfCorrectAnswers, getPairQuestionAnswer);
};
