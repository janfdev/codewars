function addLength(str) {
  return Array.from(str.split(" ").map((word) => `${word} ${word.length}`));
}