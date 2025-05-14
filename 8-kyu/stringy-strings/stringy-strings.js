function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }
  return result;
}
​