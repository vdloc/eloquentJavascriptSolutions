const flat = (array) => array.reduce((acc, item) => acc.concat(item), []);

let arrays = [[1, 2, 3], [4, 5], [6]];
flat(arrays);
