// Non-optimal solution. O(N²) for time and O(1) in memory.
// For the optimal solution, just count the amount of different numbers on the array. O(N) both time and memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let result = 0;

    while(!nums.every(num => !num)) {
        let minimum = getMinimum(nums);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i]) {
                nums[i] -= minimum;
            } 
        }

        result++;
    }

    return result;
};

function getMinimum(nums) {
    let minimum = 0;
    nums.forEach(num => {
        if (!num) return;

        if (!minimum) {
            minimum = num;
            return;
        }
        
        minimum = Math.min(minimum, num);
    });

    return minimum;
}