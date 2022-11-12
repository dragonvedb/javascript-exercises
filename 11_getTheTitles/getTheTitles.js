const getTheTitles = function(books) {
    const titlesArray = [];

    for (let i = 0; i < 2; i++) {
        titlesArray.push(books[i].title);
    }

    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
