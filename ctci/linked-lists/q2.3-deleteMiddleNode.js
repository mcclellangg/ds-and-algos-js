// 2.3 Delete Middle Node
/*
  Implement an algorithm to delete a node in the middle (i.e., any node but
  the first and last node, not necessarily the exact middle) of a singly linked
  list, given only access to that node.

  Time Complexity: O(1) Constant Operation
  Space Complexity: O(1)
  Constraint: Will not work for a node at the end of the list
*/

function deleteMiddleNode(node) {
  if (!node.data || !node.next) {
    return false; // empty node can't be removed
  }

  node.data = node.next.data;
  node.next = node.next.next;
  return true; // node removed
}

module.exports = { deleteMiddleNode };
