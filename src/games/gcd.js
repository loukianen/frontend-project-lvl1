import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

export default () => {
  const getGreatestCommonDivisor = (first, second) => {
    if (first === second) {
      return String(first);
    }
    const getDivisor = (divisor, greatestDivisor) => {
      if (divisor > first / 2 && divisor > second / 2) {
        return String(greatestDivisor);
      }
      return (first % divisor === 0 && second % divisor === 0) ? getDivisor(divisor + 1,
        divisor) : getDivisor(divisor + 1, greatestDivisor);
    };
    return getDivisor(1, 0);
  };
  const getPairQuestionAnswer = () => {
    const first = getRandomValue(0, 100);
    const second = getRandomValue(0, 100);
    const question = `${first} ${second}`;
    const correctAnswer = getGreatestCommonDivisor(first, second);
    return cons(question, correctAnswer);
  };
  return startEngine('Find the greatest common divisor of given numbers.', getPairQuestionAnswer);
};
