
// ex1
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

// Example usage
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}


// ex2
function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumArray(arr.slice(1));
    }
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const sum = sumArray(myArray);
  console.log(sum); // Output: 15

  

//   ex3
  function reverseString(str) {
    if (str === "") {
      return "";
    } else {
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
  
  // Example usage:
  const myString = "Hello, world!";
  const reversedString = reverseString(myString);
  console.log(reversedString); // Output: "!dlrow ,olleH"
  

  // data structure excercises

  //exc 1 
  class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      const value = this.stack.pop();
      if (value === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return value;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.minStack[this.minStack.length - 1];
    }
  }

  

  //exc 2
  function reverseQueue(queue) {
    const stack = [];
  
    // Pop elements from the queue and push them onto the stack
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
  
    // Pop elements from the stack and push them back into the queue
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    return queue;
  }

  //exc 3
  class Queue {
    constructor() {
      this.s1 = [];
      this.s2 = [];
    }
  
    enqueue(value) {
      this.s1.push(value);
    }
  
    dequeue() {
      if (this.s2.length === 0) {
        // Transfer all elements from s1 to s2 in reversed order
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
  
      if (this.s2.length === 0) {
        throw new Error("Queue is empty");
      }
  
      return this.s2.pop();
    }
  
    peek() {
      if (this.s2.length === 0) {
        // Transfer all elements from s1 to s2 in reversed order
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
  
      if (this.s2.length === 0) {
        throw new Error("Queue is empty");
      }
  
      return this.s2[this.s2.length - 1];
    }
  
    isEmpty() {
      return this.s1.length === 0 && this.s2.length === 0;
    }
  }
  // linked list

  //Exc1
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeMiddleNode(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Remove the middle node
    let prev = null;
    let curr = head;
    while (curr !== slow) {
      prev = curr;
      curr = curr.next;
    }
  
    if (prev) {
      prev.next = slow.next;
    } else {
      head = head.next;
    }
  
    return head;
  }

  //Exc2
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
  
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    return prev;
  }
  
  
  
  