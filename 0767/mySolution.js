/**
 * Solution for Question 767 - Reorganize String
 * Optimal solution, O(N) for both time and memory.
 * Could've used MaxHeaps.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let chars = {};
    let maxFreq = 0;
    let maxChar = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        chars[char] = (chars[char] || 0) + 1;
        
        if (chars[char] > maxFreq) {
            maxFreq = chars[char];
            maxChar = char;
        }
    }

    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }

    let resultArr = [];
    let idx = 0;

    while (chars[maxChar]) {
        resultArr[idx] = maxChar;
        idx += 2;
        chars[maxChar]--;
    }

    for (const key in chars) {
        while (chars[key]) {
            if (idx >= s.length) {
                idx = 1;
            }

            resultArr[idx] = key;
            idx += 2;
            chars[key]--;
        }
    }

    return resultArr.join("");
};

module.exports = reorganizeString;
