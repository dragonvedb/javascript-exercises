const caesar = function(string, shift) {

   const utcString = [];

    for (let i = 0; i < string.length; i++) {
        let utcCode = string.charCodeAt(i);
        utcString.push(utcCode);
    }

    const newString = [];

    function capitalLet(utcCode, shift) {
        if ((utcCode + shift) > 90) {
            return capitalLet(64, (utcCode + shift) - 90);
        } else if ((utcCode + shift) < 65) {
            return capitalLet(91, -65 + (utcCode + shift));
        } else {
            return utcCode + shift;
        }
    }

    function smallLet(utcCode, shift) {
        if ((utcCode + shift) > 122) {
            return capitalLet(96, (utcCode + shift) - 122);
        } else if ((utcCode + shift) < 97) {
            return capitalLet(123, -97 + (utcCode + shift));
        } else {
            return utcCode + shift;
        }
    }


    for (const utcCode of utcString) {

        let newChar;

        if (65 <= utcCode && utcCode <= 90) {
            newChar = capitalLet(utcCode, shift); 
            newChar = String.fromCharCode(newChar);
        } else if (97 <= utcCode && utcCode <= 122) {
            newChar = smallLet(utcCode, shift); 
            newChar = String.fromCharCode(newChar);
        } else {
            newChar = String.fromCharCode(utcCode);
        }

        newString.push(newChar);
    }

    return newString.join('');

};

// Do not edit below this line
module.exports = caesar;
