// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
// input [2, 4, 6, 8], 5 || output [2, 4, 5, 6, 8]
// input [4,8,15,23,42], 16 || output [4,8,15,16,23,42]

let arr = [2, 4, 6, 8];
let val = 5;

function insertShiftArray(arr, val) {
  let answer = [];
  let middle = arr[Math.floor((arr.length - 1)/2)];
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
    if (arr[i] === middle) {
      answer.push(val);
    }
  }
  return answer;
};

console.log('answer--', insertShiftArray(arr, val))