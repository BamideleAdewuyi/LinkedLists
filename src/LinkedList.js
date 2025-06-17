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

    };

    size() {

    };

    head() {

    };

    tail() {

    };

    at(index) {

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