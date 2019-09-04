export default () => {
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);
  const question = `${firstNumber} ${secondNumber}`;
  const getDivisor = (divisor, greatestDivisor) => {
    if (divisor > firstNumber / 2 && divisor > secondNumber / 2) {
      console.log(`Question: ${question}`);
      return String(greatestDivisor);
    }
    return (firstNumber % divisor === 0 && secondNumber % divisor === 0) ? getDivisor(divisor + 1,
      divisor) : getDivisor(divisor + 1, greatestDivisor);
  };
  return getDivisor(1, 0);
};
