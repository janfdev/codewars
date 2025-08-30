function digits(num) {
  let result = [];
  String(num)
    .split("")
    .forEach((d, i, arr) => {
      for (let k = i + 1; k < arr.length; k++) {
        result.push(Number(d) + Number(arr[k]));
      }
    });
  return result;
}