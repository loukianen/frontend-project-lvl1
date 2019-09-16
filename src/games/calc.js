import { cons, car, cdr } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

export default () => {
  const getOperandAndFunction = () => {
    const plus = cons('+', ((a, b) => a + b));
    const minus = cons('-', ((a, b) => a - b));
    const multipl = cons('*', ((a, b) => a * b));
    const operandList = l(plus, minus, multipl);
    return random(operandList);
  };
  const getPairQuestionAnswer = () => {
    const first = getRandomValue(0, 100);
    const second = getRandomValue(0, 100);
    const pairOperandAndFunction = getOperandAndFunction();
    const operand = car(pairOperandAndFunction);
    const action = cdr(pairOperandAndFunction);
    const question = `${first} ${operand} ${second}`;
    const correctAnswer = action(first, second);
    return cons(question, correctAnswer);
  };
  return startEngine('What is the result of the expression?', getPairQuestionAnswer);
};
