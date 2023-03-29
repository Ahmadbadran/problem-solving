
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
  