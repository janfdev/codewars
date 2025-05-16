function whatday(num) {
  switch (num) {
    case 1:
      num = "Sunday";
      break;
    case 2:
      num = "Monday";
      break;
    case 3:
      num = "Tuesday";
      break;
    case 4:
      num = "Wednesday";
      break;
    case 5:
      num = "Thursday";
      break;
    case 6:
      num = "Friday";
      break;
    case 7:
      num = "Saturday";
      break;
    default:
      num = "Wrong, please enter a number between 1 and 7";
  }
  return num;
}
​
​
​