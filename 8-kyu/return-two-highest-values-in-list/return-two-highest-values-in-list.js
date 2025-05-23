function twoHighest(arr) {
  const uniqueValues = new Set(arr);
​
  const sortedUnique = Array.from(uniqueValues).sort((a, b) => b - a);
​
  return sortedUnique.slice(0, 2);
}