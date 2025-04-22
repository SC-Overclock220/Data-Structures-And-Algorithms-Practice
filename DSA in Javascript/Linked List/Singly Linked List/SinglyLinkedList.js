import { ListNode } from "./ListNode.js";

export class SinglyLinkedList {
  #head;
  #tail;
  #sizeOfLL;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#sizeOfLL = 0;
  }

  createLinkedList(value) {
    let newNode = new ListNode(value);
    this.#head = newNode;
    this.#tail = newNode;
    this.#sizeOfLL++;
  }

  addToHead(value) {
    if (!this.#head) {
      this.createLinkedList(value);
      return;
    }

    let newNode = new ListNode(value);
    newNode.next = this.#head;
    this.#head = newNode;
    this.#sizeOfLL++;

    console.log(`Node Inserted At Head`);
  }

  addToTail(value) {
    if (!this.#head) {
      this.createLinkedList(value);
      return;
    }

    let newNode = new ListNode(value);
    this.#tail.next = newNode;
    this.#tail = newNode;
    this.#sizeOfLL++;

    console.log("Node Inserted At Tail");
  }

  printLinkedList() {
    let temp = this.#head;

    while (temp != null) {
      process.stdout.write(`${temp.value} --> `);
      temp = temp.next;
    }
    process.stdout.write("NULL \n");
  }

  continuityCheck() {
    console.log(this.#tail, this.#tail.next, this.#head);
  }
}
