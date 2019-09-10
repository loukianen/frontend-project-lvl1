import startEngine from '../engine';
import { cons } from '../pairs';
import { getRoundRandom100 } from '../getRandom';
import getGreatestCommonDivisor from '../getGCD';

export default () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const numberOfCorrectAnswers = 3;
  const getPairQuestionAnswer = () => {
    const firstNumber = getRoundRandom100();
    const secondNumber = getRoundRandom100();
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    return cons(question, correctAnswer);
  };
  return startEngine(gameTask, numberOfCorrectAnswers, getPairQuestionAnswer);
};
