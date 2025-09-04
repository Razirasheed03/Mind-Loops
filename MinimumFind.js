////////////// using built in methods //////////////////

function findMin(arr) {
    let min = Math.min(...arr)
    return min
}
// console.log(findMin([5,2,4,6,77,1]))


///////////// using loops without built in /////////////////

function findMinimum(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
    }
    return arr
}

///////////////// using for of loop //////////////
function findMinForOf(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log(findMinForOf([5, 2, 4, 6, 77, 1]));





////// using sort method ////////

function findMinSort(arr) {
    return [...arr].sort((a, b) => a - b)[0];
}
console.log(findMinSort([5, 2, 4, 6, 77, 1]));

