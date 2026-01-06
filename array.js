//1.Find the largest element in an array
function largestElement(arr) {
  if (arr.length === 0) {
    return "array is empty";
  }
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
//usecases
const arr = [1, 23, 43, 66, 434, 345];
const arr1 = [-1, -2, -3];
const arr2 = [];
const arr3 = [10, 10, 10];
const result = largestElement(arr3);
// console.log(result);

//2.Find the smallest element in an array.
function smallesElement(arr) {
  if (arr.length === 0) {
    return "array should not be empty";
  }

  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const smallElement = smallesElement(arr1);

console.log(smallElement);

//3.merge conflicts
function calculate(a, b) {
  return a + b; //sumlogic
}
function calculate(a, b) {
  return a * b;
}

// console.log(smallElement);

//3.find second largest in the given elements
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

const resultsl = findSecondLargest(arr3);

console.log(resultsl);
