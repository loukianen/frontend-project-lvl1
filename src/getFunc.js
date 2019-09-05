import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import progression from './games/progression';
import prime from './games/prime';

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
    case 'prime':
      return prime();
    default:
      return null;
  }
};
