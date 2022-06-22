// 2.1 Remove Duplicates
/*
  Write code to remove duplicates from an UNSORTED linked list.

  Time Complexity: O(n) since you have to visit every element of the linked linkedList
  Space Complexity: Constrained by the dataMap of O(n) size
*/

function removeDuplicates(linkedList) {
  let dataMap = {};

  let current = linkedList.head;
  let previous;

  // traverse the linked list
  while (current) {
    if (!dataMap[current.data]) {
      dataMap[current.data] = 1;
      previous = current;
    } else {
      previous.next = current.next;
      linkedList.size--;
    }

    current = current.next;
  }

  return linkedList;
}
/*
  ALTERNATIVE Answer that does not use a buffer

  Time Complexity: O(n2) Since you visit every element twice
  Space Complexity: O(1)
*/

function runnerRemovedDuplicates(linkedList) {
  // Traverse the linkedList
  let current = linkedList.head;

  while (current) {
    // For each node, traverse the rest of the linkedList, and remove if
    let runner = current;

    while (runner.next) {
      if (runner.next.data == current.data) {
        runner.next = runner.next.next;
        linkedList.size--;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  return linkedList;
}

module.exports = { removeDuplicates, runnerRemovedDuplicates };
