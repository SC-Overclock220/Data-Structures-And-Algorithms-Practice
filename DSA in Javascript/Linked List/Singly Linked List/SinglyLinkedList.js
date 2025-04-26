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

  addToPos(value, pos) {
    if (!this.#head) {
      this.createLinkedList(value);
      return;
    }

    if (pos == 1) {
      this.addToHead(value);
      return;
    }
    if (pos > this.#sizeOfLL) {
      this.addToTail(value);
      return;
    }
    let newNode = new ListNode(value);
    let temp = this.#head;

    for (let i = 1; i < pos - 1; i++) {
      temp = temp.next;
    }

    let nextNode = temp.next;
    temp.next = newNode;
    newNode.next = nextNode;
    this.#sizeOfLL++;
    console.log("Node Inserted At Position " + pos);
  }

  printLinkedList() {
    let temp = this.#head;

    while (temp != null) {
      process.stdout.write(`${temp.value} --> `);
      temp = temp.next;
    }
    process.stdout.write("NULL \n");
  }

  deleteFromHead() {
    if (!this.#head) {
      console.log("Nothing To Delete! Linked List Is Empty");
      return;
    }

    this.#head = this.#head.next;
    this.#sizeOfLL--;
    console.log("Node Deleted From Head");
  }

  deleteFromTail() {
    if (!this.#head) {
      console.log("Nothing To Delete! Linked List Is Empty");
      return;
    }

    let temp = this.#head;

    while (temp.next !== tail) temp = temp.next;

    this.#head = this.#head.next;
    this.#sizeOfLL--;
    console.log("Node Deleted From Head");
  }

  deleteFromPos(pos) {
    if (!this.#head) {
      console.log("Nothing To Delete! Linked List Is Empty");
      return;
    }

    if (pos <= 0) {
      console.log(`Invalid Position. Cannot Perform Delete`);
      return;
    }

    if (pos === 0) {
      this.deleteFromHead();
      return;
    }

    if (pos >= this.#sizeOfLL) {
      this.deleteFromTail();
      return;
    }

    let temp = this.#head;

    for (let i = 1; i < pos - 1; i++) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
    this.#sizeOfLL--;
    console.log(`Node Deleted From Position ${pos}`);
  }

  continuityCheck() {
    console.log(this.#tail, this.#tail.next, this.#head, this.#sizeOfLL);
  }
}
