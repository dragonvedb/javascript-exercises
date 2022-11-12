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

    for (let i = 0; i < (str.length - 1) - i; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
