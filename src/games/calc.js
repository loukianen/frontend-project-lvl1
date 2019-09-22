import { cons, car, cdr } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameDescription = 'What is the result of the expression?';
const operations = l(
  cons('+', ((a, b) => a + b)),
  cons('-', ((a, b) => a - b)),
  cons('*', ((a, b) => a * b)),
);
const getOperation = () => random(operations);
const getQuestionAnswer = () => {
  const first = getRandomValue(0, 100);
  const second = getRandomValue(0, 100);
  const operation = getOperation();
  const sign = car(operation);
  const action = cdr(operation);
  const question = `${first} ${sign} ${second}`;
  const correctAnswer = action(first, second);
  return cons(question, correctAnswer);
};
export default () => startEngine(gameDescription, getQuestionAnswer);
