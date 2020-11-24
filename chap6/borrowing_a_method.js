let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true

Object.prototype.hasOwnProperty.call(map, "one");
