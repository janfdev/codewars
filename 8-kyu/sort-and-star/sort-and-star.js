function twoSort(s) {
  s.sort();
​
  const firstWordArray = s[0];
​
  return firstWordArray.split("").join("***");
}