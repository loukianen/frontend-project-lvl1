const isPrime = (number, divisorToStart) => {
  if (divisorToStart <= number / 2) {
    return number % divisorToStart !== 0 ? isPrime(number, divisorToStart + 1) : 'no';
  }
  return 'yes';
};
export default isPrime;
