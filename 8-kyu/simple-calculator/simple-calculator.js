function calculator(a, b, sign) {
  const parseNumber = (value) => {
    if (typeof value === 'number' && !isNaN(value)) {
      return value;
    }
    const parsed = parseInt(value);
    return isNaN(parsed) ? null : parsed;
  };
​
  const numA = parseNumber(a);
  const numB = parseNumber(b);
​
  // Validasi umum untuk input yang tidak valid
  if (numA === null || numB === null) {
    return "unknown value";
  }
​
  switch (sign) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      return numA / numB; 
    default:
      return "unknown value";
  }
}