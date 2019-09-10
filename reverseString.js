function reverseString(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
    //     revString += str[i];
    // }
    // return revString;

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    return str.split('').reduce((revString, char) => char + revString, '');
}

console.log(reverseString('hello'));