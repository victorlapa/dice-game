// Returns a random number between the min and max values.

export const getLimitedNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;

  return Math.floor(Math.random() * (max - min) + min);
};
