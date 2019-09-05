export default () => {
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);
  const preOperand = Math.random();
  let operand;
  let answer;
  if (preOperand < 0.33) {
    answer = firstNumber + secondNumber;
    operand = '+';
  } else if (preOperand > 0.67) {
    answer = firstNumber - secondNumber;
    operand = '-';
  } else {
    answer = firstNumber * secondNumber;
    operand = '*';
  }
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  console.log(`Question: ${question}`);
  return String(answer);
};
