import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

export default () => {
  const isPrime = (value, divisorToStart) => {
    if (divisorToStart <= value / 2) {
      return value % divisorToStart !== 0 ? isPrime(value, divisorToStart + 1) : false;
    }
    return true;
  };
  const getCorrectAnswer = (valueOriginal, startPosition) => {
    if (isPrime(valueOriginal, startPosition) === true) {
      return 'yes';
    }
    return 'no';
  };
  const getPairQuestionAnswer = () => {
    const startCheckingPosition = 2;
    const question = getRandomValue(0, 100);
    const correctAnswer = getCorrectAnswer(question, startCheckingPosition);
    return cons(question, correctAnswer);
  };
  return startEngine('Answer "yes" if given number is prime. Otherwise answer "no".', getPairQuestionAnswer);
};
