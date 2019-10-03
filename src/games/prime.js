import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  const start = 2;
  const checkValue = (value, divisor) => {
    if (divisor <= value / 2) {
      return value % divisor !== 0 ? checkValue(value, divisor + 1) : false;
    }
    return true;
  };
  return checkValue(num, start);
};
const getQuestionAnswer = () => {
  const question = getRandomValue(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
export default () => startEngine(gameDescription, getQuestionAnswer);
