const generateUniqueRandomNumbers = (numbers) => {
  const uniqueRandomNumbers = [];

  let randomIndex = Math.floor(Math.random() * 10);

  for (let i = 0; i < numbers; i++) {

    if (randomIndex === 9) {
      randomIndex = 0;
    }

    uniqueRandomNumbers.push(randomIndex);

    randomIndex++;
  }

  return uniqueRandomNumbers;
};

export default generateUniqueRandomNumbers;