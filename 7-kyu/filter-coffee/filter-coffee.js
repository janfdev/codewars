function search(budget, prices) {
  let affordable = prices.filter((price) => price <= budget);
  affordable.sort((a, b) => a - b);
  return affordable.join(",");
}