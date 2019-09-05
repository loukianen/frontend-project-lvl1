export default () => {
  const question = Math.round(Math.random() * 100);
  console.log(`Question: ${question}`);
  return question % 2 === 0 ? 'yes' : 'no';
};
