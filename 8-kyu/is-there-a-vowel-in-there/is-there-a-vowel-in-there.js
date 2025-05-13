function isVow(arr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelCodes = vowels.map(v => v.charCodeAt(0)); // [97, 101, 105, 111, 117]
​
  return arr.map(num => {
    const index = vowelCodes.indexOf(num);
    return index !== -1 ? vowels[index] : num;
  });
}
​