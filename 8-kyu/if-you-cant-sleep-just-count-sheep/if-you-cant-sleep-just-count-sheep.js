var countSheep = function (num) {
  if (num < 0) return null;
  if (num === 0) return "";
​
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
​
  return result;
};