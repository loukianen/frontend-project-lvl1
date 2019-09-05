export default () => {
  const operand = Math.random();
  const stopper = Math.floor(Math.random() * 10);
  const firstNumber = Math.round(Math.random() * 10);
  let result = '';
  let question = '';
  const listFunction = (val, act) => {
    if (act < 0.33) {
      return val + 2;
    }
    return act > 0.67 ? val - 2 : val * 2;
  };
  const getResult = (startNumber) => {
    let acc = startNumber;
    for (let counter = 0; counter < 10; counter += 1) {
      if (counter === stopper) {
        result = acc;
        question = `${question} ..`;
        acc = listFunction(acc, operand);
      } else {
        question = `${question} ${acc}`;
        acc = listFunction(acc, operand);
      }
    }
    console.log(`Question:${question}`);
    return String(result);
  };
  return getResult(firstNumber);
};
