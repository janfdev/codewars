const findAverage = (array) =>
  array.length ? array.reduce((a, c) => a + c, 0) / array.length : 0;
​