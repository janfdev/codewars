function locate(arr, value) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      if (locate(item, value)) {
        return true;
      }
    } else if (item === value) {
      return true;
    }
  }
  return false;
}
​