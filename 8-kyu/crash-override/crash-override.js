function aliasGen(first, last) {
  const firstNameAliases = {
    A: "Alpha", B: "Beta", C: "Cache", D: "Data", E: "Energy",
    F: "Function", G: "Glitch", H: "Half-life", I: "Ice", J: "Java",
    K: "Keystroke", L: "Logic", M: "Malware", N: "Nagware", O: "OS",
    P: "Phishing", Q: "Quantum", R: "RAD", S: "Strike", T: "Trojan",
    U: "Ultraviolet", V: "Vanilla", W: "WiFi", X: "Xerox", Y: "Y", Z: "Zero"
  };
​
  const lastNameAliases = {
    A: "Analogue", B: "Bomb", C: "Catalyst", D: "Discharge", E: "Electron",
    F: "Faraday", G: "Gig", H: "Hacker", I: "IP", J: "Jabber",
    K: "Killer", L: "Lazer", M: "Mike", N: "n00b", O: "Overclock",
    P: "Payload", Q: "Quark", R: "Roy", S: "Spy", T: "T-Rex",
    U: "Unit", V: "Virus", W: "Worm", X: "X", Y: "Yob", Z: "Zombie"
  };
​
  function isLetter(char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }
​
  const firstInitial = first.charAt(0).toUpperCase();
  const lastInitial = last.charAt(0).toUpperCase();
​
  if (!isLetter(firstInitial) || !isLetter(lastInitial)) {
    return "Your name must start with a letter from A - Z.";
  }
​
  const firstAlias = firstNameAliases[firstInitial];
  const lastAlias = lastNameAliases[lastInitial];
​
  // Combine and return the aliases
  return firstAlias + " " + lastAlias;
}
​