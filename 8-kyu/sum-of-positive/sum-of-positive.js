function positiveSum(arr) {
  return arr.filter((m) => m > 0).reduce((acc, cum) => acc + cum, 0);
}
​