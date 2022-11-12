const caesar = function(string, shift) {

   const utcString = [];

    for (let i = 0; i < string.length; i++) {
        let utcCode = string.charCodeAt(i);
        utcString.push(utcCode);
    }

    const newString = [];

    for (const utcCode of utcString) {

        let newChar;

        if (65 <= utcCode <= 90) {
            newChar = String.fromCharCode(utcCode + shift);
        } else if (97 <= utcCode <= 122) {
            newCHar = String.fromCharCode(utcCode + shift);
        } else {
            newChar = String.fromCharCode(utcCode);
        }

        newString.push(newChar);
    }

    return newString.join();

};

// Do not edit below this line
module.exports = caesar;
