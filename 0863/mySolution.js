/**
 * Solution for Question 863 - All Nodes Distance K in Binary Tree
 * O(N) for both time and memory.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let parents = new Map();

    function dfs(node, parent) {
        if (!node) return;

        parents.set(node.val, parent);

        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, null);

    let queue = [target];
    let visited = new Set();
    visited.add(target.val);
    let distance = 0;

    while(queue.length && distance <= k) {
        if (distance === k) {
            return queue.map(n => n.val);
        }

        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (!node) continue;

            let neighbors = [node.left, node.right, parents.get(node.val)];

            for (let neighbor of neighbors) {
                if (!neighbor) continue;

                if (!visited.has(neighbor.val)) {
                    visited.add(neighbor.val);
                    queue.push(neighbor);
                }
            }
        }

        distance++;
    }

    return [];
};



module.exports = distanceK;
