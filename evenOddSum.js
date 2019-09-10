function evenOddSum(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

const output = evenOddSum([50, 60, 60, 45, 71]);
console.log(output);
