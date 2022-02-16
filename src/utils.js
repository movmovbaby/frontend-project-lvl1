const maxNumber = 100;
const generateRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default generateRandomInt;
