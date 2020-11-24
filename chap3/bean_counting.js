const countChar = (str, countChar) =>
  [...str].reduce((count, char) => count + (char === countChar ? 1 : 0), 0);

const countB = (str) => countChar(str, "B");
