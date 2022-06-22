// 2.5 Sum Lists
/*
  You have two numbers represented by a linked list, where each node contains a single
  digit. The digits are stored in REVERSE ORDER, such that the Vs digit is at the head of the list. Write a
  function that adds the two numbers and returns the sum as a linked list. NOTE: Don't cheat by converting the Lists
  into integers.

  Time Complexity:
  Space Complexity:
  Constraints:
*/
const { LinkedList, Node } = require("./LinkedList");

function sumLists(a, b) {
    let totalSumLL = new LinkedList();
    totalSumLL.insertFirst(0);

    let currA = a.head;
    let currB = b.head;
    let currSumLL = totalSumLL.head;

    while (currA && currB) {
        let sum = currA.data + currB.data;
        // Create next blank node
        if (currA.next || currB.next) {
            currSumLL.next = new Node(0, null);
        }

        if (sum >= 10) {
            currSumLL.data += sum % 10;
            currSumLL.next.data = 1;
        } else {
            currSumLL.data += sum;
        }

        currA = currA.next;
        currB = currB.next;
        currSumLL = currSumLL.next;
    }

    if ((currA || currB) && !(currA && currB)) {
        // Get Longer node
        if (currA) {
            var longerCurr = currA;
        } else {
            var longerCurr = currB
        }

        while (longerCurr) {
            let sum = longerCurr.data + currSumLL.data;

            if (longerCurr.next) {
                currSumLL.next = new Node(0, null);
            }

            currSumLL.data = sum;
            longerCurr = longerCurr.next;
            currSumLL = currSumLL.next;
        }
    }

    return totalSumLL;
};

module.exports = { sumLists }
