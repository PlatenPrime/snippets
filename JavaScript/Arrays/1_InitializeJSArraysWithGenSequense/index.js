const initializeMappedArray = (n, mapFn = (_, i) => i) =>
  Array(n).fill(null).map(mapFn);

console.log(initializeMappedArray(6)); // [0, 1, 2, 3, 4]
console.log(initializeMappedArray(5, (_, i) => `item ${i + 1}`)); // ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
