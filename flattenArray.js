function flattenArray(arrays) {
    // Solution 1
    return arrays.reduce((a,b) => a.concat(b)); 

    // Solution 2
    // return [].concat.(...arrays);
}

const output = flattenArray([1,2], [4,3], [6,5]);
console.log(output);