import calc from './calc';
import even from './even';
import gcd from './gcd';

export default (name) => {
  switch (name) {
    case 'calc':
      return calc();
    case 'even':
      return even();
    case 'gcd':
      return gcd();
    default:
      return null;
  }
};
