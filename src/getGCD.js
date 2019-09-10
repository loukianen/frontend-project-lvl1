export default (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return String(firstNumber);
  }
  const getDivisor = (divisor, greatestDivisor) => {
    if (divisor > firstNumber / 2 && divisor > secondNumber / 2) {
      return String(greatestDivisor);
    }
    return (firstNumber % divisor === 0 && secondNumber % divisor === 0) ? getDivisor(divisor + 1,
      divisor) : getDivisor(divisor + 1, greatestDivisor);
  };
  return getDivisor(1, 0);
};
