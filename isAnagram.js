function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

// Helper function used to format strings
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

const output = isAnagram('Dormitory', 'dirty room##');
console.log(output);