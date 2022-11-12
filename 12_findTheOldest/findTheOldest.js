const findTheOldest = function(people) {
    let highestAge = 0;
    let oldestPerson = people.reduce(function(oldest, person) {

        let startAge = person.yearOfBirth;
        let stopAge = person.yearOfDeath;

        if (person.yearOfDeath === undefined) {
            stopAge = new Date().getFullYear();
        }

        if (stopAge - startAge > highestAge) {
            highestAge = stopAge - startAge;
            oldest = person;
        }

        return oldest;

    })
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
