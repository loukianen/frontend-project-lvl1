import startEngine from '../engine';
import { cons, car, cdr } from '../pairs';
import { getRoundRandom100 } from '../getRandom';
import getOperandAndFunction from '../getOperAndFunc';

export default () => {
  const gameTask = 'What is the result of the expression?';
  const numberOfCorrectAnswers = 3;
  const getPairQuestionAnswer = () => {
    const firstNumber = getRoundRandom100();
    const secondNumber = getRoundRandom100();
    const pairOperandAndFunction = getOperandAndFunction();
    const operand = car(pairOperandAndFunction);
    const action = cdr(pairOperandAndFunction);
    const question = `${firstNumber} ${operand} ${secondNumber}`;
    const correctAnswer = action(firstNumber, secondNumber); // eval(question);
    return cons(question, correctAnswer);
  };
  return startEngine(gameTask, numberOfCorrectAnswers, getPairQuestionAnswer);
};
