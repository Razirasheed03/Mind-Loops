///////////// way 1 /////////////////

function PalinromeArr(arr) {
    let first = 0
    let last = arr.length - 1
    while (first < last) {
        if (arr[first] !== arr[last]) {
            return false
        }
        first++
        last--
    }
    return true
}
console.log(PalinromeArr([1,2,3,3,2,1]))


////////////// way 2 ////////////////

function PalidromeArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(PalidromeArray([1, 2, 3, 2, 1]))

function isPalindromeArray(arr) {
    let reversed = [...arr].reverse(); // make a reversed copy
    return arr.every((val, idx) => val === reversed[idx]);
}

// Example
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArray([1, 2, 3]));       // false
