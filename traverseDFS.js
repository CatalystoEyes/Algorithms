class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else if (newNode.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right
            }
        }
    }
    preOrder(node, callback) {
        if (!node) return;
        if (callback) callback(node);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }
    inOrder(node, callback) {
        if (!node) return;
        this.inOrder(node.left, callback);
        if (callback) callback(node);
        this.inOrder(node.right, callback);
    }
    postOrder(node, callback) {
        if (!node) return;
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        if (callback) callback(node);
    }
    traverse(callback, method) {
        if (method === 'preorder') {
            return this.preOrder(this.root, callback);
        }
        else if (method === 'inorder') {
            return this.inOrder(this.root, callback);
        }
        else if (method === 'postorder') {
            return this.postOrder(this.root, callback);
        }
    }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(4);
tree.add(7);
tree.add(14);
tree.add(24);
tree.add(3);
tree.add(9);
tree.add(16);
tree.add(20);

console.log(JSON.stringify(tree, null, '  '));

tree.traverse(node => console.log(node.value), 'preorder');
tree.traverse(node => console.log(node.value), 'inorder');
tree.traverse(node => console.log(node.value), 'postorder');