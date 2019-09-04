export default () => {
  const question = Math.round(Math.random() * 100);
  const checkNumber = (number, divisor) => {
    if (divisor <= number / 2) {
      return number % divisor !== 0 ? checkNumber(number, divisor + 1) : false;
    }
    return true;
  };
  console.log(`Question: ${question}`);
  return checkNumber(question, 2) ? 'yes' : 'no';
};
