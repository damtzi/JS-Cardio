function longestWord(str) {
    // Create a filtered array
    const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // If multiple words are longest, put into array
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

    // Check if more than one array value
    return longestWordArr === 1 ? longestWordArr[0] : longestWordArr;
}

const output = longestWord('Hello, my name is Damian');
console.log(output);