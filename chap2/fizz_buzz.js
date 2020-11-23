const fizzBuzz = (start = 1, stop = 100) => {
  let current = start;
  let result = "";
  while (current++ < stop) {
    if (current % 3 === 0 || current % 5 === 0) {
      result += current % 3 === 0 ? "Fizz" : "";
      result += current % 5 === 0 ? "Buzz" : "";

      console.log(result);
      result = "";
    } else console.log(current);
  }
};

fizzBuzz();
