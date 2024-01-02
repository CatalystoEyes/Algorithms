class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
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
    add(value) {
        if (this.root) {
            return this.root.add(value)
        }
        this.root = new TreeNode(value);
    }
    find(value) {
        let current = this.root;
        let count = 0;
        while (true) {
            count++;
            if (current === undefined) return undefined;
            if (current.value === value) {
                console.log(`the ${value} was found in ${count} tries`)
                return current;
            } else if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            }
        }
    }
}

const tree = new BinaryTree()
tree.add(29)
tree.add(13)
tree.add(17)
tree.add(23)
tree.add(5)
tree.add(15)
tree.add(37)
tree.add(31)
tree.add(41)

console.log(JSON.stringify(tree, null, '  '))

const searchItem = tree.find(41)
console.log(searchItem)
