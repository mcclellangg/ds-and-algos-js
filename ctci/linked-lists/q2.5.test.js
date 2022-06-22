const { sumLists } = require("./q2.5-sumLists");
const { LinkedList } = require("./LinkedList");

// Create test input
let listA = new LinkedList();
let listB = new LinkedList();

let digitsA = [0, 0, 1];
let digitsB = [0, 0, 1];

digitsA.map(n => listA.insertLast(n));
digitsB.map(n => listB.insertLast(n));

lCarry1 = new LinkedList();
lCarry2 = new LinkedList();

let dCarry1 = [7, 1, 6];
let dCarry2 = [5, 9, 2];

dCarry1.map(n => lCarry1.insertLast(n));
dCarry2.map(n => lCarry2.insertLast(n));

// 2.5 Sum Lists
describe("test adding linked lists", () => {
    test("addition without carry", () => {
        expect(sumLists(listA, listB).toArray()).toEqual([0, 0, 2]);
    });

    test("addition without carry", () => {
        expect(sumLists(lCarry1, lCarry2).toArray()).toEqual([2, 1, 9]);
    });
})
