const loop = (value, testFn, updateFn, bodyFn) => {
  let currentValue = value;

  while (testFn(currentValue)) {
    bodyFn(currentValue);
    currentValue = updateFn(currentValue);
  }
};
