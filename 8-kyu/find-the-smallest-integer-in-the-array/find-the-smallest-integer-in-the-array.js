function findSmallestInt(arr) {
  return arr.reduce((a, b )=> a < b ? a : b)
}