function removeDuplicates(arr) {
  //return arr.filter((item, index) => arr.indexOf(item) == index);
  return [...new Set(arr)];
}

const array = [1, 2, 2, 1, 3, 4, 3];
console.log(removeDuplicates(array));
