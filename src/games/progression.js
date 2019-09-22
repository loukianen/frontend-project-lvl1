import { cons } from '@hexlet/pairs';
import getRandomValue from '../getRandom';
import startEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getQuestionAnswer = () => {
  const stepOfProgression = getRandomValue(1, 5);
  const firstElement = getRandomValue(0, 100);
  const hiddenElementPosition = getRandomValue(0, lengthOfProgression - 1);
  const correctAnswer = firstElement + stepOfProgression * hiddenElementPosition;
  let question = '';
  for (let counter = 0; counter < lengthOfProgression; counter += 1) {
    const start = firstElement;
    const spaceAfterElement = (counter === lengthOfProgression - 1 ? '' : ' ');
    if (counter === hiddenElementPosition) {
      question = `${question}..${spaceAfterElement}`;
    } else {
      question = `${question}${start + stepOfProgression * counter}${spaceAfterElement}`;
    }
  }
  return cons(question, correctAnswer);
};
export default () => startEngine(gameDescription, getQuestionAnswer);
