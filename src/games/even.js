import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (valueForEven) => valueForEven % 2 === 0;
const getCorrectAnswer = (value) => {
  if (isEven(value) === true) {
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
