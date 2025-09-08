
////////////// with built in methods /////////////

function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumOfArray([3, 4, 5, 6, 7, 8, 9]))

///////////// without built in methods //////////////

function SumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(SumArr([1, 2, 3, 4, 5]))

///// using for of loop //////
function sumUsingForOf(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumUsingForOf([1, 2, 3, 4, 5]));
