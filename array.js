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
console.log(result);
