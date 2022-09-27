// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
function sameFrequency(num1, num2){
    let num11 = num1.toString()
      let num22 = num2.toString()
      if (num11.length !== num22.length) {return false}
      const lookup = {};
      for (let i= 0; i < num11.length; i++) {
          let letter = num11[i]
          lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
      }
      for (let i=0; i < num22.length; i++) {
          let letter = num22[i];
          if (!lookup[letter]) {
              return false
          } else {
              lookup[letter]-=1;
          }
       }
      return true;
  }

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false