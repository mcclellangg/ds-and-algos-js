// 2.2 Return Kth to Last Element
/*
  Implement an algorithm to find the kth to last element of a singly linked list.

  Iterative Solution with two pointer
  Time Complexity: O(n) you only need to visit the list elements once
  Space Complexity: O(1)
  Constraints:
    - Assumes k of 1, and 0 is the last element
*/

function getKthToLast(linkedList, k) {
  let p1 = linkedList.head;
  let p2 = linkedList.head;

  // set pointers k places apart
  for (let i = 0; i < k; i++) {
    if (!p1.next) {
      return null; // k is out of range
    }
    p1 = p1.next;
  }

  while (p1) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p2.data;
}
/*
  Recursive Solution

  Time Complexity: O(n) since you visit every linked list element
  Space Complexity: O(n) since you potentially have n calls on the stack
  Constraints:
    - assumes you are being passed the head node, and not the linked list
    - does not resolve k out of range
*/

function getKthToLastRecursive(head, k) {
  // Check Base Case
  if (head == null) {
    return 0;
  }

  let index = getKthToLastRecursive(head.next, k) + 1;
  if (index == k) {
    console.log(head.data);
  }

  return index;
}

module.exports = { getKthToLast, getKthToLastRecursive };
