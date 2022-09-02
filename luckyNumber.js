// You get a string with numbers(0 can't be in there).
// You need to return a lucky number.
// The number of times a lucky number occurs in a string is equal to the number itself.
// let str = '2233447777774455';  // 2 is a lucky num here.
// If there is no lucky num return 0.
// If you get a few lucky nums return the biggest one.
// let str = '22333447777774455';  // 2 and 3 are lucky nums here. Return 3.

let str = '22333474455';

function findLuckyNum(str) {
    // declare a variable with a lucky number and an empty object
    let lucky = 0;
    let numObj = {};
    // check if the object contains each number. If not, create. It yes, increase by 1
    for (num of str) {
        numObj[num] ? numObj[num] += 1 : numObj[num] = 1;
    }
    console.dir(numObj)
    // get keys and valuesfrom the object separately
    let nums = Object.keys(numObj);
    let frequencies = Object.values(numObj);
    console.log(`nums: ${nums}`, `frequencies: ${frequencies}`)
    // check if every value of nums is equal to the same value in frequencies
    // also check if existing lucky number is more of less of checking value and save into lucky the bigger one
    for (let num in nums) {
        lucky = (nums[num] == frequencies[num] && lucky < frequencies[num]) ? frequencies[num] : lucky
    }
    
    return (`The lucky number is: ${lucky}`)
}

console.log(findLuckyNum(str))