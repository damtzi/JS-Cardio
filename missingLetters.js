function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;
  str.split("").forEach((char, i) => {
    if (str.charCodeAt(i) == compare) {
      compare++;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

const output = missingLetters("abe");
console.log(output);
