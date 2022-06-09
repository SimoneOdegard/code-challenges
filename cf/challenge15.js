/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
NOTE: The search algorithm used in your function should be a binary search.

Input: [4,8,15,16,23,42], 15
Output:  2

Input: [11,22,33,44,55,66,77], 90
Output: -1

Input: [1, 2, 3, 5, 6, 7], 4
Output: -1
*/

// return index of array's element (same element inside of array) that is equal to the search key
// return -1 if element does not exist

let arr = [4,8,15,16,23,42];
let key1 = 15;
let key2 = 90;

// ----- with built in method ----- //
// function BinarySearch(arr, key) {
//   let index = arr.indexOf(key);

//   if (!index) {
//     return -1;
//   }

//   return index;
// };

// ----- without built in methods ----- //
function BinarySearch(arr, key) {
  let count = -1;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === key) {
      return count;
    }
  }
  return -1;
}

console.log('index answer--', BinarySearch(arr, key1));
console.log('-1 answer--', BinarySearch(arr, key2));