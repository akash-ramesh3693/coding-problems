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

// console.log(smallElement);

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

// console.log(resultsl);

//4.find the second smallest element in an array
function secondSmallest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest === Infinity ? null : secondSmallest;
}

const smallestArray = [2, 3, 4, 5, 7];
const resultS = secondSmallest(smallestArray);
// console.log(resultS);

//5.reverse an array elements.

function reverseAnArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

// console.log(reverseAnArray(arr));
// //5.1 arr.reverse method
// const res = arr.reverse();
// console.log(arr);

//5.2 using reverse looping.
function reversedArray(arr) {
  let reversed = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
const arrR = [1, 2, 3, 4, 5];
const reversedArrayResult = reversedArray(arrR);
// console.log(reversedArrayResult);

//6.remove duplicates from an array using Set
//order preserved
//clean and fast

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const duplicateArr = [1, 2, 2, 3, 4, 5, "apple", "apple", "box", "box"];
const originalResult = removeDuplicates(duplicateArr);

// console.log(originalResult);

//6.1 using loop

function removeDuplicates2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

const duplicateArray = removeDuplicates2(duplicateArr);
console.log(duplicateArray);
