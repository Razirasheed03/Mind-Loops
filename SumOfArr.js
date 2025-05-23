
////////////// with built in methods /////////////

function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumOfArray(numbers))


///////////// without built in methods //////////////

function SumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(SumArr([1, 2, 3, 4, 5]))