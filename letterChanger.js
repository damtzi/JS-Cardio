function letterChanger(str) {
     let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

     newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

     return newStr;
}

const output = letterChanger('hello there');
console.log(output);