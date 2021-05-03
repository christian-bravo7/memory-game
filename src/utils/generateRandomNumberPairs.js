import generateUniqueRandomNumbers from '@/utils/generateUniqueRandomNumbers';

const generateRandomNumberPairs = (pairs) => {
  const randomNumbers = generateUniqueRandomNumbers(pairs);
  const randomPairNumbers = [...randomNumbers, ...randomNumbers].sort(_ => Math.random() - 0.5);

  return randomPairNumbers;
};

export default generateRandomNumberPairs;