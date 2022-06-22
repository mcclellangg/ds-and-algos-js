const { deleteMiddleNode } = require("./q2.3-deleteMiddleNode");
const { LinkedList, Node } = require("./LinkedList");

// Create test input
let inputLL = new LinkedList();
let chars = ["a", "b", "c", "d", "e"];

for (let c of chars) {
  inputLL.insertLast(c);
}

let nodeB = inputLL.getNodeAt(1);
let emptyNode = new Node();
let lastNode = inputLL.getNodeAt(4);

// 2.3 Delete Middle Node
describe("test removing given node from linked list", () => {
  test("removes node b from linked list", () => {
    expect(deleteMiddleNode(nodeB)).toBe(true);
  });

  test("empty nodes can't be removed", () => {
    expect(deleteMiddleNode(emptyNode)).toBe(false);
  });

  test("last node can't be removed", () => {
    expect(deleteMiddleNode(lastNode)).toBe(false);
  });
});
