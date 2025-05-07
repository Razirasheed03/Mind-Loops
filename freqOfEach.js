function findEach(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++
        } else {
            count[arr[i]] = 1
        }
    }
    return count
}

console.log(findEach([1, 2, 3, 4, 5, 5]))