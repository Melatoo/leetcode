/**
 * Solution for Question 2222 - Number of Ways to Select Buildings.
 * O(N) for time and O(1) for memory.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
    let counter = 0;
    let hash = {
        0: 0,
        1: 0
    };

    for (let i = 0; i < s.length; i++) {
        hash[s[i]]++;
    }

    let previousOnes = 0, previousZeros = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            counter += previousZeros * (hash[0] - previousZeros);
            previousOnes++;
            continue;
        }

        counter += previousOnes * (hash[1] - previousOnes);
        previousZeros++;
    }

    return counter;
};


module.exports = numberOfWays;
