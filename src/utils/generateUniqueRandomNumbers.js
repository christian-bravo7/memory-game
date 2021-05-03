const generateUniqueRandomNumbers = (numbers) => {
  const uniqueRandomNumbers = [];

  let nextIndex = Math.floor(Math.random() * 10);

  for (let i = 0; i < numbers; i++) {
    nextIndex = nextIndex < 10 ? nextIndex : 0;
    uniqueRandomNumbers.push(nextIndex);

    nextIndex++;
  }

  return uniqueRandomNumbers;
};


export default generateUniqueRandomNumbers;