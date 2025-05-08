///////////////// using Set ///////////////////

let arr = [1, 2, 3, 4, 5, 3, 3, 3, , 3, 2, 6]
const hasDuplicate = arr.length !== new Set(arr).size
// console.log(hasDuplicate)   /////////true cuz having duplicate values

//////////////// using nested Loop //////////////////
function findDup() {
    let dup = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                dup.push(arr[i])
            }
        }
    }
    return dup
}
// console.log(findDup(arr))


//////////// if we want each Count /////////////////
function findDupCount() {
    const count = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {

            if (count[arr[i]]) {
                count[arr[i]]++
            } else {
                count[arr[i]] = 1
            }
        }
    }
    for (let key in count) {
        if (count[key] > 1) {
            console.log(`${key} repeated ${count[key]} times`)
        }
    }
}
findDupCount(arr)