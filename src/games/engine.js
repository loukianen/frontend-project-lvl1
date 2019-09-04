import readlineSync from 'readline-sync';
import getFunction from './getFunc';

const runGame = (gameName, counter) => {
  if (counter >= 3) return true;
  const rigthAnswer = getFunction(gameName);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rigthAnswer) {
    console.log('Correct!');
    console.log();
    return runGame(gameName, counter + 1);
  }
  console.log();
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
  return false;
};
export default runGame;
