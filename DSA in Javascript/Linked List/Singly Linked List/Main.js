import { SinglyLinkedList } from "./SinglyLinkedList.js";

let sll1 = new SinglyLinkedList();
sll1.addToTail(2);
sll1.addToTail(4);
sll1.addToTail(3);
sll1.addToTail(6);
sll1.addToTail(8);
sll1.addToHead(5);

sll1.printLinkedList();
sll1.continuityCheck();
