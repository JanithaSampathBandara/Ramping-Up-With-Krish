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
binarySearchTree.insert(29);
binarySearchTree.insert(15);
binarySearchTree.insert(24);
binarySearchTree.insert(31);
binarySearchTree.insert(11);
binarySearchTree.insert(22);
binarySearchTree.insert(33);
binarySearchTree.insert(77);
binarySearchTree.insert(66);
binarySearchTree.insert(34);
binarySearchTree.insert(74);
binarySearchTree.insert(94);
binarySearchTree.insert(25);
binarySearchTree.insert(26);
binarySearchTree.insert(35);
binarySearchTree.insert(27);

var root = binarySearchTree.getRootElement();
binarySearchTree.printLeafNodes(root);