import { cons, car, cdr } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameRules = 'What is the result of the expression?';
const signAndActionList = l(
  cons('+', ((a, b) => a + b)),
  cons('-', ((a, b) => a - b)),
  cons('*', ((a, b) => a * b)),
);
const getSignAndAction = () => random(signAndActionList);
const getQuestionAnswer = () => {
  const first = getRandomValue(0, 100);
  const second = getRandomValue(0, 100);
  const signAndAction = getSignAndAction();
  const sign = car(signAndAction);
  const action = cdr(signAndAction);
  const question = `${first} ${sign} ${second}`;
  const correctAnswer = action(first, second);
  return cons(question, correctAnswer);
};
export default () => startEngine(gameRules, getQuestionAnswer);
