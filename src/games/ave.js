import readlineSync from 'readline-sync';
import resultGame from './engine';

export default (game, gameDiscription) => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log(gameDiscription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  const result = resultGame(game, 0) ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
  console.log(result);
};
