// ======================================================= //

// **  C H A L L E N G E   0 0 X  ** //
// **  2 D   A R R A Y  ** //

// (HACKERRANK) There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass usm for every hourglass in arr. Then print the maximum hourglass sum. The array will always be 6x6.

// Example hourglass shape
// 1 2 3
//   4 
// 1 2 3

// return the maximum hourglass sum





// ======================================================= //

// **  C H A L L E N G E   0 1 1  ** //
// **  L U C K   B A L A N C E  ** //

// Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers, L[i] and T[i]:
// -- L[i] is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by L[i]; if she loses it, her luck balance will increase by L[i].
// -- T[i] denotes the contest's importance rating. It's equal to 1 if the contest is important, and it's equal to 0 if it's unimportant.

// If Lena loses no more than k important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.

// Example
// k = 2
// L = [5, 1, 4]
// T = [1, 2, 0]

// If Lena loses all of the contests, her luck will be 5 + 1 + 4 = 10. Since she is allowed to lose 2 important contests, and there are only 2 important contests, she can lose all three contests to maximize her luck at 10.

// If k = 1, she has to win at least 1 of the 2 important contests. She would choose to win the lowest value important contest worth 1. Her final luck will be 5 + 4 - 1 = 8.

let contests1 = [[5, 1], [1, 2], [4, 0]]; // k = 2 ... luck at 10
let contests2 = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]; // k = 3 ... luck at 29

// NOT WORKING YET.

function luckBalance(k, contests) {
  let luck = 0;
  let sorted = contests.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    luck += sorted[i][0];
    for (let j = 0; j < sorted[i].length; j++) {
    }
  }
  return luck;
};

console.log('luck balance--', luckBalance(2, contests1));