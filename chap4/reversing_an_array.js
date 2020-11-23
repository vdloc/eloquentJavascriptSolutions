const reverseArray = (array = []) =>
  array.reduceRight((acc, item) => acc.concat(item), []);

const reverseArrayInPlace = (array = []) => {
  const length = array.length;

  for (let i = 0; i <= Math.floor(length / 2) - 1; i++) {
    const swap = array[i];

    array[i] = array[length - i - 1];

    array[length - i - 1] = swap;
  }

  return array;
};
