function isOpposite(s1, s2) {
  if (!s1 && !s2) {
    return false;
  }
  if (s1.length !== s2.length) {
    return false;
  }
​
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];
​
    if (char1 === char2) {
      return false;
    }
​
    if (char1.toLowerCase() !== char2.toLowerCase()) {
      return false;
    }
  }
​
  return true;
}
​