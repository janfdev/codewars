function distinct(a) {
  return a.filter((item, index) => {
    return a.indexOf(item) === index;
  });
}
​