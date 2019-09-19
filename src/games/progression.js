import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameRules = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getQuestionAnswer = () => {
  const stepOfProgression = getRandomValue(1, 5);
  const firstElement = getRandomValue(0, 100);
  const positionOfHiddenElement = getRandomValue(0, lengthOfProgression - 1);
  let question = '';
  let correctAnswer = '';
  for (let counter = 0; counter < lengthOfProgression; counter += 1) {
    const start = firstElement;
    if (counter === positionOfHiddenElement) {
      correctAnswer = start + stepOfProgression * counter;
      question = `${question} ..`;
    } else {
      question = `${question} ${start + stepOfProgression * counter}`;
    }
  }
  return cons(question, correctAnswer);
};
export default () => startEngine(gameRules, getQuestionAnswer);
