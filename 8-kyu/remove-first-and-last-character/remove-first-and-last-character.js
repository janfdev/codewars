// function removeChar(str) {
//   if (str.length <= 2) {
//     return "";
//   }
​
//   return str.slice(1, str.length - 1);
// }
​
​
const removeChar = (str) => (str.length <= 2 ? "" : str.slice(1, -1));
​