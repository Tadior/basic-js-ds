const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
   const index = getIndex(l, k);

   if (index < 0) {
      return false;
   } else if (index === 0) {
      l = l.next;
      return removeKFromList(l, k);
   } else {
      let prev = null;
      let curr = l;

      for (let i = 0; i < index; i++) {
         prev = curr;
         curr = curr.next;
      }
      prev.next = curr.next;

      if (curr.next != null && curr.next.value == k) {
         curr = curr.next;
         prev.next = curr.next;
      }
   }

   return l;
}

function getIndex(l, k) {
   let index = 0;

   while (l.value) {
      if (l.value == k) {
         return index;
      } else {
         l = l.next;
      }
      index++;
   }

   return false;
}

module.exports = {
   removeKFromList
};
