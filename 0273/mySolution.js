/**
 * Solution for Question 273 - Integer to English Words.
 * O(k) for both time and memory. K being num's size.
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";

    let numString = num.toString();
    let zeros = 0;
    let word = "";

    while (numString) {
        let chunkWords = getWords(numString.slice(-3), zeros);

        if (chunkWords) {
            if (word.length) word = " " + word;
            word = chunkWords + word;
        }

        if (numString.length <= 3) {
            return word;
        }

        numString = numString.slice(0, -3);
        zeros++;
    };
};

function getWords(numStr, zeros) {
    if (parseInt(numStr) === 0) return "";

    let num = numStr.split("");
    let hash = {
        "1": ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
        "2": ["Twenty", "Two"],
        "3": ["Thirty", "Three"],
        "4": ["Forty", "Four"],
        "5": ["Fifty", "Five"],
        "6": ["Sixty", "Six"],
        "7": ["Seventy", "Seven"],
        "8": ["Eighty", "Eight"],
        "9": ["Ninety", "Nine"]
    };

    let zerosHash = {
        0: "",
        1: " Thousand",
        2: " Million",
        3: " Billion"
    };

    let word = "";

    if (num.length === 3) {
        if (num[0] !== "0") {
            if (num[0] === "1") {
                word += "One Hundred";
            } else {
                word += hash[num[0]][1] + " Hundred";
            }
        }
        num.shift();
    }

    if (num.length === 1) {
        num.unshift("0");
    }

    for (let i = 0; i < num.length; i++) {
        if (num[i] === "0") continue;

        if (word.length) {
            word += " ";
        }

        if (num[i] === "1" && i === 0) {
            word += hash["1"][parseInt(num[1])];
            break;
        }

        if (num[i] === "1" && i === 1) {
            word += "One";
            continue;
        }

        word += hash[num[i]][i];
    }

    return word + zerosHash[zeros];
}

module.exports = numberToWords;
