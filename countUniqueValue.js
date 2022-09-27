// You have a function that accepts a sorted array and count the unique values in the array.
// There can be negative numbers but it will always be sorted.

// The way of solving: We run through the array with 2 pointers.
// The first one on the first element of the array, the second one on the second one
// If they're the same, we move second one up, if they're diff, we move up first one.
// Return the place of the first element + 1.
function countUniqueNums(arr) {
    if(arr.length === 0) return 0;
    // grab the first element
    let i = 0;
    // run through array starting from the second element
    for (j = 1; j < arr.length; j++) {
        //  we compare this element with i. If i !== j we move i to the next position
        if (arr[i] !== arr[j]) {
            i++;
        }
    }
    // return the position of i + 1
    return (i + 1)
}

console.log(countUniqueNums([1,2,3,4,4,4])); // returns 4 because there're 4 unique nums: 1, 2, 3 and 4
// console.log(countUniqueNums([]))   // returns 0
// console.log(countUniqueNums([-2, -1, -1, 0, 1, 2]))   // returns 5