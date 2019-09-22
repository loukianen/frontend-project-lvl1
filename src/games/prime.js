import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  if (value < 2) return false;
  const startCheckingPosition = 2;
  const checkValue = (valueToCheck, startDivisor) => {
    if (startDivisor <= valueToCheck / 2) {
      return valueToCheck % startDivisor !== 0 ? checkValue(valueToCheck, startDivisor + 1) : false;
    }
    return true;
  };
  return checkValue(value, startCheckingPosition);
};
const getQuestionAnswer = () => {
  const question = getRandomValue(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
export default () => startEngine(gameDescription, getQuestionAnswer);
