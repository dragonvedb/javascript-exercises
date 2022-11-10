const palindromes = function (str) {
    str = str.toLowerCase();
    str = [...str];

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ' ':
            case ',':
            case '.':
            case '!':
            case '?':
            case '/':
            case ':':
            case ';':
                str.splice(i, 1);
                i--;
                break;
        }
    }

    return;
};

// Do not edit below this line
module.exports = palindromes;
