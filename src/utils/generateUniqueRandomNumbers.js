const generateUniqueRandomNumbers = (numbers) => {
  const uniqueRandomNumbers = [];

  while (uniqueRandomNumbers.length < numbers) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (uniqueRandomNumbers.indexOf(randomNumber) === -1) {
      uniqueRandomNumbers.push(randomNumber);
    }
  }

  return uniqueRandomNumbers;
};

export default generateUniqueRandomNumbers;