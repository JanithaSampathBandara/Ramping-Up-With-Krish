import BinarySearchTree from './binary-search-tree.js';
var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(3);
binarySearchTree.insert(36);
binarySearchTree.insert(2);
binarySearchTree.insert(12);
binarySearchTree.insert(28);
binarySearchTree.insert(39);
binarySearchTree.insert(38);
binarySearchTree.insert(75);

var root = binarySearchTree.getRootElement();
binarySearchTree.printLeafNodes(root);