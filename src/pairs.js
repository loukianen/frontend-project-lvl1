const cons = (a, b) => (message) => {
  let res;
  switch (message) {
    case 'car':
      res = a;
      break;
    case 'cdr':
      res = b;
      break;
    default:
      console.log(`${message} is not keyword`);
  }
  return res;
};
const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');
const toString = (pair) => String(`(${car(pair)}, ${cdr(pair)})`);

export {
  cons, car, cdr, toString,
};
