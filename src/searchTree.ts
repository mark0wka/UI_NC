import {Node} from "./node.js";

export class SearchTree<T> {
    private root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    getRoot(): Node<T> {
        return this.root;
    }

    findByKey(key: number): Node<T> {
        let cur = this.root;
        if (cur == null) return null;

        while (cur.key != key) {
            if (key < cur.key) {
                cur = cur.leftNode;
            } else {
                cur = cur.rightNode;
            }
            if (cur == null) {
                return null;
            }
        }
        return cur;
    }

    insert(key: number, value: T): void {
        let newNode = new Node<T>();
        newNode.key = key;
        newNode.value = value;

        if (this.root == null) {
            this.root = newNode;
        } else {
            let cur = this.root;
            let parent;
            while (true) {
                parent = cur;
                if (key == cur.key) {
                    cur.value = value;
                    return;
                } else if (key > cur.key) {
                    cur = cur.rightNode;
                    if (cur == null) {
                        parent.rightNode = (newNode);
                        return;
                    }
                } else {
                    cur = cur.leftNode;
                    if (cur == null) {
                        parent.leftNode = (newNode);
                        return;
                    }
                }
            }
        }
    }

    private replace(node: Node<T>): Node<T> {
        let parent = node;
        let heirNode = node;
        let cur = node.rightNode;
        while (cur != null) {
            parent = heirNode;
            heirNode = cur;
            cur = cur.leftNode;
        }
        if (heirNode != node.rightNode) {
            parent.leftNode = (heirNode.rightNode);
            heirNode.rightNode = (node.rightNode);
        }
        return heirNode;
    }

    delete(key: number): boolean {
        let cur = this.root;
        let parent = this.root;
        let isLeftNode = true;

        if (cur == null) {
            return false;
        }

        while (cur.key != key) {
            parent = cur;
            if (key > cur.key) {
                isLeftNode = false;
                cur = cur.rightNode;
            } else {
                isLeftNode = true;
                cur = cur.leftNode;
            }
            if (cur == null) {
                return false;
            }
        }

        if (cur.leftNode == null && cur.rightNode == null) {
            if (cur == this.root) {
                this.root = null;
            } else if (isLeftNode) {
                parent.leftNode = (null);
            } else {
                parent.rightNode = (null);
            }
        } else if (cur.rightNode == null) {
            if (cur == this.root) {
                this.root = cur.leftNode;
            } else if (isLeftNode) {
                parent.leftNode = (cur.leftNode);
            } else {
                parent.rightNode = (cur.leftNode);
            }
        } else if (cur.leftNode == null) {
            if (cur == this.root) {
                this.root = cur.rightNode;
            } else if (isLeftNode) {
                parent.leftNode = (cur.rightNode);
            } else {
                parent.rightNode = (cur.rightNode);
            }
        } else {
            let heir = this.replace(cur);
            if (cur == this.root) {
                this.root = heir;
            } else if (isLeftNode) {
                parent.leftNode = (heir);
                heir.leftNode = cur.leftNode;
            } else {
                parent.rightNode = (heir);
                heir.leftNode = cur.leftNode;
            }
        }
        return true;
    }

    public printTree(node:Node<T> ): void {
        if (node != null) {
            this.printTree(node.leftNode);
            console.log(node.key+" ("+node.value+")");
            this.printTree(node.rightNode);
        }
    }
}