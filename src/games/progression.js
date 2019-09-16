import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

export default () => {
  const getPairQuestionAnswer = () => {
    const lengthOfProgression = 10;
    const stepOfProgression = 2;
    const firstElement = getRandomValue(0, 100);
    const hiddenElement = getRandomValue(0, lengthOfProgression - 1);
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
  return startEngine('What number is missing in the progression?', getPairQuestionAnswer);
};
