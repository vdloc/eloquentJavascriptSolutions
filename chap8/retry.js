class MultiplicationUnitFailure extends Error {}

const primitiveMultiply = (a, b) => {
  if (Math.random() < 0.2) {
    return a * b;
  } else throw new MultiplicationUnitFailure("Klunk");
};

const reliableMultiply = (a, b) => {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicationUnitFailure) {
      return reliableMultiply(a, b);
    } else throw new Error("Klunk");
  }
};

console.log(reliableMultiply(8, 8));
