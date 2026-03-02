function all(arr, fun) {
  
  if(!arr && !fun) {
    return true
  }
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false;
    }
  }
​
  return true;
}