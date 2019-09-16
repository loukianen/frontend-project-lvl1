import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

export default () => {
  const getCorrectAnswer = (value) => {
    const isEven = (valueForEven) => valueForEven % 2 === 0;
    return isEven(value) ? 'yes' : 'no';
  };
  const getPairQuestionAnswer = () => {
    const question = getRandomValue(0, 100);
    const correctAnswer = getCorrectAnswer(question);
    return cons(question, correctAnswer);
  };
  return startEngine('Answer "yes" if the number is even, otherwise answer "no".', getPairQuestionAnswer);
};
