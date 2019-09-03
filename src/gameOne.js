import readlineSync from 'readline-sync';

const gameOne = (counter) => {
  if (counter >= 3) return true;
  const question = Math.round(Math.random() * 100);
  const rigthAnswer = question % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rigthAnswer) {
    console.log('Correct!');
    return gameOne(counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
  return false;
};
export default gameOne;
