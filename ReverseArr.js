///////////with built in methods ///////////

function revArray(arr) {
    let revArr = arr.reverse()
    console.log(revArr)
}
revArray([1, 2, 3, 4, 5,])


/////////// without built in methods ///////////

function revArr(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}
revArr([1, 2, 3, 4, 5])