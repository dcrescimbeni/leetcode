function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  this.head = null;

  this.insertHead = function (data) {
    this.head = new ListNode(data, this.head);
  };

  this.getTail = function () {
    // Starts at the head
    let current = this.head;
    // Loops the current. If current.next is null (tail), it stops.
    while (current.next) {
      current = current.next;
    }
    // Returns the current whose next value is null (tail)
    return current;
  };

  this.add = function (data) {
    if (this.head === null) {
      this.insertHead(data);
    } else {
      let tailNode = this.getTail();
      tailNode.next = new ListNode(data);
    }
  };

  this.printList = function () {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  };
}

// crear linked list
const linked = new LinkedList();
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((item) => {
  linked.add(item);
});

linked.printList();
