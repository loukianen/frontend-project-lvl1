import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gamesDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (first, second) => {
  if (first === second) {
    return (first);
  }
  const getDivisor = (divisor, greatestDivisor) => {
    if (divisor > first / 2 && divisor > second / 2) {
      return (greatestDivisor);
    }
    return (first % divisor === 0 && second % divisor === 0) ? getDivisor(divisor + 1,
      divisor) : getDivisor(divisor + 1, greatestDivisor);
  };
  return getDivisor(1, 0);
};
const getQuestionAnswer = () => {
  const first = getRandomValue(0, 100);
  const second = getRandomValue(0, 100);
  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second);
  return cons(question, correctAnswer);
};
export default () => startEngine(gamesDescription, getQuestionAnswer);
