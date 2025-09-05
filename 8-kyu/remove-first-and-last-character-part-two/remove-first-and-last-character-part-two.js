// const array = (string) =>
//   string.split(",").length <= 2
//     ? null
//     : string.split(",").slice(1, -1).join(" ").toString();
​
const array = (str) => {
  const parts = str.split(",");
  return parts.length <= 2 ? null : parts.slice(1, -1).join(" ");
};