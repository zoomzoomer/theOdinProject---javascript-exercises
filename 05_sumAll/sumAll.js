const sumAll = function(a, b) {
    let finalSum = 0;

    for (let i = a; i != b + 1; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
