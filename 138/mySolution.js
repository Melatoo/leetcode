// Non-optimal space but optimal time. O(n) for both.
// Optimal space solution interweaves original list with new nodes.

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const map = new Map;

    return getOrCreateNode(head, map);
};

function getOrCreateNode(node, map) {
    if (!node) {
        return null;
    }

    let { next, random, val } = node;

    let actualNode = map.get(node);

    if (actualNode) {
        return actualNode;
    }

    actualNode = new _Node(val, null, null);
    map.set(node, actualNode);

    actualNode.next = getOrCreateNode(next, map); 
    actualNode.random = map.get(random) || getOrCreateNode(random, map);

    return actualNode;
}