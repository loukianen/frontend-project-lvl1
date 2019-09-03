import readlineSync from 'readline-sync';

const gameOne = (counter) => {
  if (counter >= 3) return true;
  const question = Math.round(Math.random() * 100);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (question % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      return gameOne(counter + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.)`);
    return false;
  }
  if (answer === 'no') {
    console.log('Correct!');
    return gameOne(counter + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.)`);
  return false;
};
export default gameOne;
