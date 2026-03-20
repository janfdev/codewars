function seqToOne(n) {
  const result = [];
​
  if (n >= 1) {
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
  } else {
    for (let i = n; i <= 1; i++) {
      result.push(i);
    }
  }
​
  return result;
}