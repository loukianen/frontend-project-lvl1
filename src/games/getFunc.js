import calc from './calc';
import even from './even';

export default (name) => {
  switch (name) {
    case 'calc':
      return calc();
    case 'even':
      return even();
    default:
      return null;
  }
};
