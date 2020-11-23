const deepEqual = (valueA, valueB) => {
  if ([valueA, valueB].some((val) => val === null)) return valueA === valueB;

  if ([valueA, valueB].some((val) => typeof val === "object")) {
    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);

    if (keysA.length !== keysB.length) return false;

    return keysA.reduce(
      (isSame, key) => deepEqual(valueA[key], valueB[key]) && isSame,
      true
    );
  }

  return valueA === valueB;
};

