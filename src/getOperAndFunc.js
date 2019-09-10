import { cons } from './pairs';

export default () => {
  const plus = cons('+', ((a, b) => a + b));
  const minus = cons('-', ((a, b) => a - b));
  const multipl = cons('*', ((a, b) => a * b));
  const operandList = [plus, minus, multipl];
  const numberOfRanges = operandList.length;
  const range = 1 / numberOfRanges;
  const controlPoint = Math.random();
  const getOperand = (accRanges, counter) => {
    if (controlPoint <= accRanges) {
      return operandList[counter];
    }
    return getOperand(accRanges + range, counter + 1);
  };
  return getOperand(range, 0);
};
