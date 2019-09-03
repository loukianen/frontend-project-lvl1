#!/usr/bin/env node
import readlineSync from 'readline-sync';

import resultGame from '../gameOne';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log();
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log();
const result = resultGame(0) ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`
console.log(result);
