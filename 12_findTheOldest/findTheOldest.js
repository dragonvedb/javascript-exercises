const findTheOldest = function(people) {
    let highestAge = 0;
    let oldestPerson = people.reduce(function(oldest, person) {

        let startAge = person.yearOfBirth;
        let stopAge;

        if (person.yearOfDeath === undefined) {
            stopAge = new Date().getFullYear();
        } else {
            stopAge = person.yearOfDeath;
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
