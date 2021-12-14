import {SearchTree} from "./searchTree.js";
import * as readlineSync from "readline-sync";
let k: string;

let tree = new SearchTree();

tree.insert(10,2);
tree.insert(7,11);
tree.insert(13,22);
tree.insert(12,12);
tree.insert(9,31);
tree.insert(5,14);
tree.insert(15,132);
tree.insert(11,24);
tree.insert(6,21);
tree.insert(8,13);
tree.insert(3,51);
tree.insert(14,65);
console.log("printTree:");
tree.printTree(tree.getRoot());
console.log("You have this tree. ");
while (readlineSync.question("Do you want to continue? Enter 1 if yes ") == "1") {
    k = readlineSync.question("Enter 1 to add node, 2 to get value by key, 3 to delete node ");
    switch (k) {
        case "1": {
            let key = parseInt(readlineSync.question("Key is: "));
            let value = readlineSync.question("Value is: ");
            tree.insert(key, value);
            tree.printTree(tree.getRoot());
            break;
        }
        case "2": {
            let key = parseInt(readlineSync.question("Key is: "));
            let value = tree.findByKey(key);
            if (value == null) {
                console.log("Key not found");
            } else {
                console.log("Value: " + value);
            }
            break;
        }
        case "3": {
            let key = parseInt(readlineSync.question("Key is: "));
            let checker: boolean;
            checker = tree.delete(key);
            if (checker==false) {
                console.log("Key not found");
            }
            tree.printTree(tree.getRoot());
            break;
        }
        default: {
            console.log("Invalid input");
            break;
        }
    }
}