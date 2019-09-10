function seekAndDestroy(arr, ...rest) {
  // const args = Array.from(arguments);
  // function filterArr(arr) {
  //     // Return true if NOT in the array
  //     return args.indexOf(arr) === -1;
  // }
  // return arr.filer(filterArr);
  return arr.filter(val => !rest.includes(val));
}

const output = seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
console.log(output);
