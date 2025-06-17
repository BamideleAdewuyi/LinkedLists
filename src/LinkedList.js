import Node from "./Nodes.js"

class LinkedList {
    constructor() {
        this.list = null;
    }

    append(value) {
        if (this.list === null) {
            this.list = [new Node(value)]
        }
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