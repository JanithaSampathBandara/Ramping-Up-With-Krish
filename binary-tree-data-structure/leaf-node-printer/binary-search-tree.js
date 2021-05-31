import Node from './tree-node.js';

export default class BinarySearchTree {

    // Root element and the element count of the binary tree set to null initially.
    constructor() {
        this.root = null;
        this.count = 0;
    }
    // Setting the root element for the first time. If already exists, find the appropriate location and store.
    insert(data) {
        let node = new Node(data);
        this.count++;
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    // Comparing the existing elements with the new element and store accordingly.
    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else if (newNode.data > root.data) {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    // Return the total elements of the tree.
    getElementCount() {
        return this.count;
    }
    // Return the root node details
    getRootElement() {
        return this.root;
    }
    
    printLeafNodes(root) {
        if (root == null) {
            return;
        } else if (root.right == null && root.left == null) {
            console.log(root.data);
        }
        
        this.printLeafNodes(root.left);
        this.printLeafNodes(root.right);
    }

}