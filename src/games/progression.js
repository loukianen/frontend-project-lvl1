import startEngine from '../engine';
import { cons } from '../pairs';
import { getRoundRandom100, getFloorRandom10 } from '../getRandom';

export default () => {
  const gameTask = 'What number is missing in the progression?';
  const numberOfCorrectAnswers = 3;
  const getPairQuestionAnswer = () => {
    const lengthOfProgression = 10;
    const stepOfProgression = 2;
    const firstElement = getRoundRandom100();
    const hiddenElement = getFloorRandom10();
    let question = '';
    let correctAnswer = '';
    let acc = firstElement;
    for (let counter = 0; counter < lengthOfProgression; counter += 1) {
      if (counter === hiddenElement) {
        correctAnswer = String(acc);
        question = `${question} ..`;
        acc += stepOfProgression;
      } else {
        question = `${question} ${acc}`;
        acc += stepOfProgression;
      }
    }
    return cons(question, correctAnswer);
  };
  return startEngine(gameTask, numberOfCorrectAnswers, getPairQuestionAnswer);
};
