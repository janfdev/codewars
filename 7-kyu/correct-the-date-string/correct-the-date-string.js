function dateCorrect(datestring) {
  if (datestring === null) return null;
  if (datestring === "") return "";
​
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!regex.test(datestring)) return null;
​
  let [day, month, year] = datestring.split(".").map(Number);
​
  year += Math.floor((month - 1) / 12);
  month = ((month - 1) % 12 + 12) % 12 + 1;
​
  while (true) {
    let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
​
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) daysInMonth[1] = 29;
​
    if (day <= daysInMonth[month - 1]) break;
​
    day -= daysInMonth[month - 1];
    month++;
​
    if (month > 12) {
      month = 1;
      year++;
    }
  }
​
  const dd = String(day).padStart(2, "0");
  const mm = String(month).padStart(2, "0");
​
  return `${dd}.${mm}.${year}`;
}