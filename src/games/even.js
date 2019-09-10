import startEngine from '../engine';
import { cons } from '../pairs';
import { getRoundRandom100 } from '../getRandom';
import isEven from '../isEven';


export default () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const numberOfCorrectAnswers = 3;
  const getPairQuestionAnswer = () => {
    const question = getRoundRandom100();
    const correctAnswer = isEven(question);
    return cons(question, correctAnswer);
  };
  return startEngine(gameTask, numberOfCorrectAnswers, getPairQuestionAnswer);
};
