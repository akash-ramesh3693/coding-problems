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

//6.1 remove duplicates and preseved order with inner and outer loop

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
// console.log(duplicateArray);

//7 .check whether an array is sorted in ascending order

function sortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(sortedArray([2, 3, 4, 5]));

//7.1 check whether an array is sorted in desending orders.
function sortedArrayDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(sortedArrayDesc([5, 4, 3, 7, 2, 1]));

//8 Built in sort method for ascending and descending order

let sortAsec = [5, 4, 3, 2, 1, 9, 8, 7];

const result1 = sortAsec.sort((a, b) => a - b);
console.log(result1);

let sortDesc = [5, 4, 3, 2, 1, 9, 8, 7];
const result2 = sortDesc.sort((a, b) => b - a);
console.log(result2);

//8.1 using bubble sort
//after each outer loop, the largest element moves to the end.
//inner loop compares adjacent elements
//swapping only left > right
function sortingAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortingAsecResult = sortingAscending(sortArr);
console.log(sortingAsecResult);

//8.2 descending order
function sortDescendingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortArr = [1, 2, 3, 4, 5];
const sortDescArray = sortDescendingArray(sortArr);
console.log(sortDescArray);

//9 sum of array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const res = [1, 2, 3, 4, 5];
const sumResult = sumOfArray(res);
// console.log(sumResult);

//10.average of array elements
//handling
function averageOfArray(arr) {
  if (arr.length === 0) {
    return "array shouldn't be empty";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const avgResult = [1, 2, 3, 4, 5];

const avgFunc = averageOfArray(avgResult);

// console.log(avgFunc);

//11.Count frequency of element
function frequencyOfElement(arr, element) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) count++;
  }
  return count;
}

const countFreq = frequencyOfElement(freqArr, 3);
console.log(countFreq);

//using filter method[3,3]
function filterfrequency(arr, element) {
  return arr.filter((item) => item === element).length;
}
const filterResult = filterfrequency(freqArr, 3);
// console.log(filterResult);

//using reduce method accumulates the count while traversing the array once.
function reduceFrequency(arr, element) {
  return arr.reduce((count, item) => {
    if (item === element) {
      count++;
    }
    return count;
  }, 0);
}
const freqArr = [1, 3, 3, 3, 2, 5, 5];
const reduceResult = reduceFrequency(freqArr, 3);
console.log(reduceResult);

//frequency of all elements using hash map;
function frequencyOfAll(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

const allFreq = ["a", "a", "b", "c", "c", "c"];
const allFrequency = frequencyOfAll(allFreq);

console.log(allFrequency);

//Most asked in frontend interviews
//used in lists ,tables, filter UI  logic
//common in UI rendering & pagination
//11.Move all zeros to the end.
function moveZeroToTheEnd(arr) {
  let j = 0;

  //two pointer appraoch
  //first pointer moves non zero elements forward
  //keeps preserve orders.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  //second pointer moves zero's to the end of an array.
  while (j < arr.length) {
    arr[j] = 0;
    j++;
  }
  return arr;
}

const zeroArr = [1, 2, 0, 0, 33, 4, 5, 3];

const moveZerofunc = moveZeroToTheEnd(zeroArr);
console.log(moveZerofunc);
