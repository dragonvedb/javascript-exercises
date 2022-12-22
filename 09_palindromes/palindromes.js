const palindromes = function (str) {
    str = str.toLowerCase();
    str = [...str];

    str = str.filter(char => {
        switch (char) {
            case ' ':
            case ',':
            case '.':
            case '!':
            case '?':
            case '/':
            case ':':
            case ';':
                return false;
        }
        return true;
    })

    /*for (let i = 0; i < (str.length - 1) - i; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }*/

    return ([...str].reverse().toString() == str.toString())
}
// Do not edit below this line
module.exports = palindromes;
