const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #array = []

  constructor() {
    this.#array = []
  }
  
  getUnderlyingList() {
    const head = new ListNode(this.#array[0]);
    let current = head;
    for (let i = 1; i < this.#array.length; i++) {
      const node = new ListNode(this.#array[i]);
      current.next = node;
      current = current.next;
    }

    return head
  }

  enqueue(value) {
    this.#array.push(value)
  }

  dequeue() {
    return this.#array.shift()
  }
}

module.exports = {
  Queue
};
