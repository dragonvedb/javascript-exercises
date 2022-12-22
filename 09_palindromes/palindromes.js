const palindromes = str => {
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

    return ([...str].reverse().toString() == str.toString())
}
// Do not edit below this line
module.exports = palindromes;
