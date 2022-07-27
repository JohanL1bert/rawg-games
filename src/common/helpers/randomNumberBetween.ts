const max = 20;
const min = 1;

export const randomNumberBettwern = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
