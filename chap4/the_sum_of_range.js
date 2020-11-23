const range = (start = 0, end = 0, step = 1) =>
  Array.from(
    { length: Math.floor((end - start) / step) + 1 },
    (_, index) => start + index * step
  );

const sum = (range) => range.reduce((acc, value) => acc + value);

