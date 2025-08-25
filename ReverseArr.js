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



////////// using Shift /////////

function revArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    console.log(newArr)
}
revArr([1, 2, 3, 4, 5])


///// using recursion /////

function rev2Arr(arr) {
    if (arr.length === 0) {
        return []
    }
    return [arr.pop(), ...rev2Arr(arr)]
}
console.log(rev2Arr([1, 2, 3, 4, 5, 6]))

////// using while loop. //////
function revArr(arr) {
    let newArr = []
    while (arr.length) {
        newArr.push(arr.pop())
    }
    console.log(newArr)
}
revArr([1, 2, 3, 4, 5])
