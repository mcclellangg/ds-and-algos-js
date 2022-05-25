const { LinkedList } = require("./LinkedListNode");

// 2.1 Remove Duplicates
/*
  Write code to remove duplicates from an UNSORTED linked list.

  Time Complexity: O(n) since you have to visit every element of the linked linkedList
  Space Complexity: Constrained by the dataMap of O(n) size
*/

/* init a sample linkedList
let ll = new LinkedList();
let chars = ["a", "b", "d", "c", "a", "b", 1, 1, 2, 3, 1];
for (let c of chars) {
  ll.insertFirst(c);
}

*/

function removeDuplicates(ll) {
  let dataMap = {};

  let current = ll.head;
  let previous;

  // traverse the linked list
  while (current) {
    if (!dataMap[current.data]) {
      dataMap[current.data] = 1;
      previous = current;
    } else {
      previous.next = current.next;
      ll.size--;
    }

    current = current.next
  }
  return ll;
}
/*
  ALTERNATIVE Answer that does not use a buffer

  Time Complexity: O(n2) Since you visit every element twice
  Space Complexity: O(1)
*/

function runnerRemovedDuplicates(ll) {
  // Traverse the LL
  let current = ll.head;

  while (current) {
    // For each node, traverse the rest of the LL, and remove if
    let runner = current;

    while (runner.next) {
      if (runner.next.data == current.data) {
        runner.next = runner.next.next;
        ll.size--;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return ll;
}

module.exports = {removeDuplicates, runnerRemovedDuplicates}
