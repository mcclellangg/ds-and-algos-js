const { partition } = require("./q2.4-partition");
const { LinkedList, Node } = require("./LinkedList");

// Create test input
let inputLL = new LinkedList();
let nums = [5, 5, 8, 2, 2, 4, 4, 10, 10, 3];
nums.map(n => inputLL.insertLast(n));

let outputLL = new LinkedList();
let partitionedNums = [3, 4, 4, 2, 2, 5, 5, 8, 10, 10];
partitionedNums.map(n => outputLL.insertLast(n));

// 2.4 Partition
describe("test partitioning of linked list", () => {
    test("partitions based on pivot x=5", () => {
        expect(partition(inputLL, 5)).toEqual(outputLL)
    });
})
