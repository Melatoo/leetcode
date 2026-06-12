/**
 * Solution for Question 2398 - Maximum Number of Robots Within Budget
 */

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    let k = 0, j = 0, cost = 0;
    let maxCharge = 0, runningCost = 0;
    for (let i = 0; i < chargeTimes.length; i++) {
        let window = (i - j) + 1;

        maxCharge = Math.max(maxCharge, chargeTimes[i]);

        runningCost += runningCosts[i];

        cost = maxCharge + (window * runningCost);

        if (cost > budget) {
            runningCost -= runningCosts[j];

            if (maxCharge === chargeTimes[j]) {
                maxCharge = 0;
                for (let k = j + 1; k <= i; k++) {
                    maxCharge = Math.max(maxCharge, chargeTimes[k]);
                } 
            }

            j++;
        } else {
            k = Math.max(k, window);
        }
    }

    return k;
};

module.exports = maximumRobots;
