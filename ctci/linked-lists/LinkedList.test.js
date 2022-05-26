const { LinkedList } = require("./LinkedList");

// Linked List
describe("LinkedList", () => {
    it("should create an empty linked list", () => {
        const linkedList = new LinkedList();

        expect(linkedList.head).toBeNull();
    });

    it("should insert nodes to front of linked list", () => {
        const linkedList = new LinkedList();

        linkedList.insertFirst(100);
        linkedList.insertFirst(200);

        expect(linkedList.head.data).toBe(200);
    });

    it("should insert nodes to end of linked list", () => {
        const linkedList = new LinkedList();

        linkedList.insertLast(100);
        linkedList.insertLast(200);
        linkedList.insertLast(300);

        expect(linkedList.toArray()).toEqual([100, 200, 300]);
    });

    it("should get nodes based on index", () => {
        const linkedList = new LinkedList();

        linkedList.insertFirst(300);
        linkedList.insertFirst(200);
        linkedList.insertFirst(100);
        expect(linkedList.getAt(0)).toBe(100);
        expect(linkedList.getAt(1)).toBe(200);
        expect(linkedList.getAt(2)).toBe(300);

        expect(linkedList.getAt(5)).toBeNull();
    });

    it("should insert, and remove nodes at specified index", () => {
        const linkedList = new LinkedList();

        linkedList.insertAt(100, 0);
        linkedList.insertAt(200, 1);
        linkedList.insertAt(300, 2);
        linkedList.insertAt(400, 99);

        expect(linkedList.toArray()).toEqual([100, 200, 300]);

        linkedList.removeAt(0);
        linkedList.removeAt(1);
        linkedList.removeAt(4);

        expect(linkedList.toArray()).toEqual([200]);
    });

    it("should clear the linked list", () => {
        const linkedList = new LinkedList();

        linkedList.insertFirst(100);
        linkedList.insertLast(200);
        linkedList.clearList();

        expect(linkedList.head).toBeNull();
    });

    it("should do this", () => {
        const linkedList = new LinkedList();
        const logSpy = jest.spyOn(console, "log");

        linkedList.insertFirst("first-call");
        linkedList.insertLast("final-call")
        linkedList.printListData();

        expect(logSpy).toBeCalledTimes(2);
        expect(logSpy).toHaveBeenLastCalledWith("final-call");
    });

    it("should convert linked list to an array", () => {
        const linkedList = new LinkedList();
        let arr = [100, 200, 300];

        arr.map(n => linkedList.insertLast(n));

        expect(linkedList.toArray()).toEqual(arr);
    });
});
