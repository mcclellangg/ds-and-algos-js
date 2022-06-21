// 2.4 Partition
/*
  Write code to partition a linked list around a value x, such that all nodes less than x come
  before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
  to be after the elements less than x. The partition element x can appear anywhere in the
  "right partition"; it does not need to appear between the left and right partitions.

  Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
  Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

  Time Complexity:
  Space Complexity:
  Constraints:
*/
const { LinkedList } = require("./LinkedList");

function partition(linkedList, x) {
    let head = linkedList.head;
    let tail = linkedList.head;

    let current = linkedList.head;
    let next;

    while (current) {
        next = current.next;
        if (current.data < x) {
            current.next = head;
            head = current;
        } else {
            tail.next = current;
            tail = current;
        }

        current = next;
    }
    tail.next = null;

    // HACK: Convert to linked List
    let nodeList = new LinkedList();
    while (head) {
        nodeList.insertLast(head.data);
        head = head.next;
    }

    return nodeList;
};

module.exports = { partition }
