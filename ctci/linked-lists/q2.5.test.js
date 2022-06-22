const { sumLists } = require("./q2.5-sumLists");
const { LinkedList } = require("./LinkedList");

// Create test input
let listA = new LinkedList().fromArray([0, 0, 1]);
let listB = new LinkedList().fromArray([0, 0, 1]);

lCarry1 = new LinkedList().fromArray([7, 1, 6]);
lCarry2 = new LinkedList().fromArray([5, 9, 2]);

unequalDigits1 = new LinkedList().fromArray([0, 0, 0, 1]);
unequalDigits2 = new LinkedList().fromArray([0, 0, 1]);

unequalCarry1 = new LinkedList().fromArray([9, 9, 0, 1]);
unequalCarry2 = new LinkedList().fromArray([1, 2, 1, 1, 1, 1]);


// 2.5 Sum Lists
describe("test adding linked lists", () => {
    test("addition without carry", () => {
        expect(sumLists(listA, listB).toArray()).toEqual([0, 0, 2]);
    });

    test("addition without carry", () => {
        expect(sumLists(lCarry1, lCarry2).toArray()).toEqual([2, 1, 9]);
    });

    test("addition with unequal digit lengths", () => {
        expect(sumLists(unequalDigits1, unequalDigits2).toArray()).toEqual([0, 0, 1, 1]);
    });

    test("addition with unequal digits and carry", () => {
        expect(sumLists(unequalCarry1, unequalCarry2).toArray()).toEqual([0, 2, 2, 2, 1, 1]);
    })
});
