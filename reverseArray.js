function reverseArray(arr) {
  // return arr.slice().reverse();
  return [...arr].reverse();
}

const array = [1, 2, 3, 4];
console.log(reverseArray(array));
