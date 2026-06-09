/**
 * Solution for Question 140 - Word Break II
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    let result = dfs("", s, wordSet);

    return result;
};

function dfs(actualString, s, wordSet) {
    let auxString = "";
    
    let result = [];

    if (!s.length) {
        result.push(actualString);

        return result;
    }

    if (actualString.length) actualString += " ";
    
    for (let i = 0; i < s.length; i++) {
        auxString += s[i];
        
        if (wordSet.has(auxString)) {
            result.push(...dfs(actualString + auxString, s.substring(auxString.length, s.length), wordSet));
        }
    }

    return result;
}

module.exports = wordBreak;
