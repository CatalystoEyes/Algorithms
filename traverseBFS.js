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
                currentNode = currentNode.right;
            }
        }
    }
    traverse(callback) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);
            if (node.left) {
                queue.push(node.left)
            } if (node.right) {
                queue.push(node.right)
            }
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

console.log(JSON.stringify(tree, null, '  '))

tree.traverse((node) => console.log(node.value))