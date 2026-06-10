/**
 * Solution for Question 994 - Rotting Oranges
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let spot = grid[i][j];

            if (spot === 2) {
                queue.push([i, j]);
                continue;
            } 

            freshOranges += spot;
        }
    }
    
    // Se já não há laranjas frescas, não gastará nenhum minuto
    if (freshOranges === 0) return 0;
    
    let result = 0;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0 && freshOranges > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift();

            for (let [dRow, dCol] of dirs) {
                let newRow = row + dRow;
                let newCol = col + dCol;

                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    freshOranges--;
                    queue.push([newRow, newCol]);
                }
            }
        }

        result++;
    }

    return freshOranges === 0 ? result : -1;
};

module.exports = orangesRotting;
