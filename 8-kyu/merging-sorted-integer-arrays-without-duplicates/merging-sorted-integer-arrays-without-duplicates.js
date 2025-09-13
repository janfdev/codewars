function mergeArrays(a, b) {
  return a
    .concat(b)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort((x, y) => x - y);
}