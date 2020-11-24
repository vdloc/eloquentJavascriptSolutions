const minimum = (valueA, valueB) =>
  [valueA, valueB].some((val) => Number.isNaN(Number(val)))
    ? NaN
    : valueA < valueB
    ? Number(valueA)
    : Number(valueB);
