import generateUniqueRandomNumbers from '@/utils/generateUniqueRandomNumbers';

const generateRandomNumberPairs = (pairs) => {
  const numbers = generateUniqueRandomNumbers(pairs);

  const randomNumberPairs = [...numbers, ...numbers].sort(_ => Math.random() - 0.5);

  //TODO: Move this logic to other file
  const numberPairsWithIndices = randomNumberPairs.reduce((object, currentValue, index) => {

    if (object[currentValue] === undefined) {
      object[currentValue] = [index];

      return object;
    }

    object[currentValue].push(index);

    return object;

  }, {});

  return { randomNumberPairs, numberPairsWithIndices };
};

export default generateRandomNumberPairs;