const isEven = (number) => {
  if (!number) return true;
  if (number === 1) return false;

  return isEven(number > 0 ? number - 2 : number + 2);
};

