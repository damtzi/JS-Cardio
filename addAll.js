// ... creates an array
function addAll(...array) {
  //   let total = 0;
  //   array.forEach(element => (total += element));
  //   return total;
  // Solution with reduce
  return array.reduce((total, number) => total + number);
}

const output = addAll(1, 2, 5, 7, 8);
console.log(output);
