function arrayChunking(arr, len) {
    // Init a chunked arr
    const chunkedArr = [];
    let i = 0;
    // Loop while index is less than the array len
    while(i < arr.length) {
        // Slice out from the index to the index + the chunk length and push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }
    return chunkedArr;
}

const output = arrayChunking([1, 2, 3, 4, 5], 3);
console.log(output);