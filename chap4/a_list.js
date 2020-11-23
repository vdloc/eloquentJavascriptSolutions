const arrayToList = (array = []) =>
  array.reduce(
    (acc, value, index) => {
      if (acc && !index) {
        acc.value = value;
        acc.rest = arrayToList(array.slice(1));
      }

      return acc;
    },
    array.length === 0 ? null : {}
  );

const listToArray = (list) => {
  if (list.value === undefined) return [];

  let arr = [list.value];

  if (list.rest) {
    arr = arr.concat(listToArray(list.rest));
  }

  return arr;
};

const prepend = (element, list) => ({ value: element, rest: list });

const nth = (list, numberOrder) =>
  (() => {
    let track = 0;

    const loop = (list, numberOrder) => {
      if (!list) return undefined;

      if (track++ < numberOrder) {
        return loop(list.rest, numberOrder);
      }

      return list;
    };

    return loop(list, numberOrder);
  })();

