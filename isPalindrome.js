// Given an integer x, return true if x is a
// palindrome, and false otherwise.
var isPalindrome = function(x) {
    // let res1 = Array.from(String(x), Number);
    // let res2 = [];
    // for(let i = res1.length - 1; i >= 0; i--){
    //     res2.push(res1[i]);
    // }
    // return JSON.stringify(res1) === JSON.stringify(res2);

    if (x < 0) return false;
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    console.log(typeof reverse);
    // compare the value regardless of types
    // if we put === then the value is always false as we compare types as well
    return x == reverse;
};

// isPalindrome(121);
// isPalindrome(-121)
isPalindrome(1000021)