function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
​
  let countPositive = 0;
  let sumNegative = 0;
​
  for (let i = 0; i < input.length; i++) {
    const curr = input[i];
    if (curr > 0) {
      countPositive++;
    } else if (curr < 0) {
      sumNegative += curr;
    }
  }
​
  return [countPositive, sumNegative];
}
​