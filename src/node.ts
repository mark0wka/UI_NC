export class Node<T> {
    private _key: number | null;
    private _value: T | null;
    private _leftNode: Node<T> | null;
    private _rightNode: Node<T> | null;

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }

    get key(): number {
        return this._key;
    }

    set key(value: number) {
        this._key = value;
    }

    get leftNode(): Node<T> | null {
        return this._leftNode;
    }

    set leftNode(value: Node<T> | null) {
        this._leftNode = value;
    }

    get rightNode(): Node<T> | null {
        return this._rightNode;
    }

    set rightNode(value: Node<T> | null) {
        this._rightNode = value;
    }

    public toString = () : string => {
            return `${this.key} (${this.value})`;
    }
}
