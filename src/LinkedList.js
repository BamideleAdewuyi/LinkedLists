import Node from "./Nodes.js"

class LinkedList {
    constructor() {
        this.list = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.list === null) {
            this.list = newNode;
            return;
        }
        
        let last = this.list;
        while (last.nextNode != null) {
            last = last.nextNode;
        };
        
        last.nextNode = newNode;
        return;
    };

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.list;
        this.list = newNode;
        return;
    };

    size() {
        if (this.list === null) {
            return 0;
        }

        let total = 1;
        let last = this.list;

        while (last.nextNode != null) {
            total++;
            last = last.nextNode;
        }

        return total;
    };

    head() {
        return this.list;
    };

    tail() {
        if (this.list === null) {
            return null;
        }

        let last = this.list;

        while (last.nextNode != null) {
            last = last.nextNode;
        }

        return last;
    };

    at(index) {
        if (this.list === null || index > this.size()) {
            return null;
        };

        let selected = this.list;
        let count = 0;

        while (count != index) {
            count++;
            selected = selected.nextNode;
        }

        return selected;
    };

    pop() {

    };

    contains(value) {

    };

    find(value) {

    }

    toString() {

    };
}

export default LinkedList;