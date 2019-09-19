import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  const startCheckingPosition = 2;
  const checkValue = (valueToCheck, startDivisor) => {
    if (startDivisor <= valueToCheck / 2) {
      return valueToCheck % startDivisor !== 0 ? checkValue(valueToCheck, startDivisor + 1) : false;
    }
    return true;
  };
  return checkValue(value, startCheckingPosition);
};
const getCorrectAnswer = (valueOriginal) => {
  if (isPrime(valueOriginal) === true) {
    return 'yes';
  }
  return 'no';
};
const getQuestionAnswer = () => {
  const question = getRandomValue(0, 100);
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};
export default () => startEngine(gameRules, getQuestionAnswer);
