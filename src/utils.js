const generateRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const getGameData = (questionGenerator, answerGenerator) => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    const question = questionGenerator();
    const answer = answerGenerator(question);
    data[i] = [question, answer];
  }
  return data;
};

export {
  generateRandomInt,
  getGameData,
};
