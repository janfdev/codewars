function fiveLine(s) {
  s = s.trim(); // 🔥 ini kunci
​
  let result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(s.repeat(i));
  }
​
  return result.join("\n");
}