//////////////// using built in methods ///////////////

function maxFinder(arr) {
    let maximumVal = Math.max(...arr)
    return maximumVal
}
// console.log(maxFinder([1,4,2,5,9,12]))

//////////////// using loops /////////////////

function FindMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
    }
    return max
}
// console.log(FindMax([1,2,5,3,77,44]))

//////////// using reduce method ////////////

function findMaxWithReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

console.log(findMaxWithReduce([1, 2, 5, 3, 77, 44]));
