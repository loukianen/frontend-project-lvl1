import calc from './calc';
import even from './even';
import gcd from './gcd';
import progression from './progression';

export default (name) => {
  switch (name) {
    case 'calc':
      return calc();
    case 'even':
      return even();
    case 'gcd':
      return gcd();
    case 'progression':
      return progression();
    default:
      return null;
  }
};
