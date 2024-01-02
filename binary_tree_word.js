class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = undefined;
        this.left = undefined;
    }
    add(value) {
        if (this.value === value) return;
        if (value < this.value) {
            this.addLeft(value)
        } else {
            this.addRight(value)
        }
    }
    addLeft(value) {
        if (this.left) {
            return this.left.add(value)
        }
        this.left = new TreeNode(value)
    }
    addRight(value) {
        if (this.right) {
            return this.right.add(value)
        }
        this.right = new TreeNode(value)
    }
}

class BinaryTree {
    constructor() {
        this.root = undefined;
    }
    addWord(value) {
        if (this.root) {
            return this.root.add(value)
        }
        this.root = new TreeNode(value);
    }
    searchWord(word) {
        let current = this.root;
        while (true) {
            if (current === undefined) return undefined;
            if (current.value === word) {
                console.log(`the ${word} was found in this text`)
                return current;
            } else if (word < current.value) {
                current = current.left
            } else if (word > current.value) {
                current = current.right
            }
        }
    }
    getWordCount() {
        if (!this.root) return 0;
        const queue = [this.root];
        let count = 0;
        while (queue.length) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left)
            } if (node.right) {
                queue.push(node.right)
            }
            count++;
        }
        console.log(count);
    }
    printTree(tree) {
        console.log(JSON.stringify(tree, null, '  '))
    }
}

const word_tree = new BinaryTree()
word_tree.addWord("apple");
word_tree.addWord("banana");
word_tree.addWord("cherry");
word_tree.addWord("banana");
word_tree.addWord("onion");
word_tree.addWord("apple");
word_tree.addWord("strawberry");

word_tree.getWordCount();
word_tree.getWordFrequency();
word_tree.searchWord("cherry");
word_tree.removeWord("banana");
word_tree.printTree(word_tree);
