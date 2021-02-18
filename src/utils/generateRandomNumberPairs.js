import generateUniqueRandomNumbers from '@/utils/generateUniqueRandomNumbers';

const generateRandomNumberPairs = (pairs) => {
  const randomNumbers = generateUniqueRandomNumbers(pairs);
  const totalCards = [...randomNumbers, ...randomNumbers].sort(_ => Math.random() - 0.5);

  return totalCards;
};

export default generateRandomNumberPairs;