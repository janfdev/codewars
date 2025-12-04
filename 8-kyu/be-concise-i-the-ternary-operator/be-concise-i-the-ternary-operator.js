// TODO: Refactor and shorten the function
​
​
// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }
​
const ageCategories = [
  { min: 65, label: "You're a(n) elderly" },
  { min: 18, label: "You're a(n) adult" },
  { min: 13, label: "You're a(n) teenager" },
  { min: 0,  label: "You're a(n) kid" }
];
​
function describeAge(age) {
  const category = ageCategories.find(c => age >= c.min);
  return category.label ?? "";
}