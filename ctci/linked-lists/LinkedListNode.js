class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last Node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // Edge case if empty
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        // Index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // First index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        previous.next = node;
        node.next = current;
        this.size++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

/*
        //TESTS
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertLast(400);
ll.insertAt(500, 3);

// ll.printListData();
//ll.printListData();
ll.removeAt(4);
ll.printListData();

*/

module.exports = { Node, LinkedList }
