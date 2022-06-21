// ======================================================= //

// **  C H A L L E N G E   0 0 1  ** //
// **  V A L I D   S T R I N G  ** //

// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string S, determine if it is valid. If so, return YES, otherwise return NO.

// Example
// s = abc
// This is a valid string because frequencies are {a: 1, b: 1, c: 1}.

// s = abcc
// This is valid because we can remove 1 c and have 1 of each character in the remaining string.

// s = abccc
// This string is not valid because we cannot only remove 1 occurrence of c. That leaves character frequencies of {a:1, b:1, c:2}

let sherlock1 = 'abc'; // yes
let sherlock2 = 'abcc'; // yes
let sherlock3 = 'abccc'; // no
let sherlock4 = 'aabbccddeefghi'; // no
let sherlock5 = 'abcdefghhgfedecba'; // yes

function isValid(s) {
  let count = 0;
  let sorted = s.split('').sort((a,b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      count++;
      if (count > 1) {
        return 'NO';
      }
    }
  };
  return 'YES';
};

// passes 16/20 tests...

console.log('sherlock--', isValid(sherlock1));