/**
 * Solution for Question 146 - LRU Cache
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.actualSize = 0;
    this.list = {};
    this.head = null;
    this.least = null;
};

/**
 * Helper to remove a node from the doubly linked list.
 * @param {object} node
 */
LRUCache.prototype.remove = function(node) {
    if (node.previous) {
        node.previous.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next) {
        node.next.previous = node.previous;
    } else {
        this.least = node.previous;
    }
};

/**
 * Helper to add a node to the head of the doubly linked list.
 * @param {object} node
 */
LRUCache.prototype.addToHead = function(node) {
    node.next = this.head;
    node.previous = null;

    if (this.head) {
        this.head.previous = node;
    }
    this.head = node;

    if (!this.least) {
        this.least = node;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.list[key];

    if (!node) return -1;

    this.remove(node);
    this.addToHead(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.list[key]) {
        let node = this.list[key];
        node.value = value;
        this.remove(node);
        this.addToHead(node);
        return;
    }

    let node = {
        key,
        value,
        next: null,
        previous: null
    };

    if (this.actualSize === this.capacity) {
        let leastNode = this.least;
        this.remove(leastNode);
        delete this.list[leastNode.key];
    } else {
        this.actualSize++;
    }

    this.list[key] = node;
    this.addToHead(node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;
