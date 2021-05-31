import BinarySearchTree from './binary-search-tree.js';

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(3);
binarySearchTree.insert(36);
binarySearchTree.insert(2);
binarySearchTree.insert(12);
binarySearchTree.insert(28);
binarySearchTree.insert(39);

var root = binarySearchTree.getRootElement();

console.log('Pre-Order Traversal :');
binarySearchTree.preOrderTraversal(root);