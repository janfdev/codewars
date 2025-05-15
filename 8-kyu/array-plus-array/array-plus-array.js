function arrayPlusArray(arr1, arr2) {
  const sum = arr1.concat(arr2).reduce((cum, acc) => cum + acc, 0);
  return sum;
}
​