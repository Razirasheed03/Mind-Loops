//////// remove Dup in arr //////////
function removeDup(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(removeDup([1, 3, 2, 3, 4, 4, 5]))


//////// using set  //////
function removeDup(arr) {
    return [...new Set(arr)]
}
console.log(removeDup([1, 3, 2, 3, 4, 4, 5]))


/////// using filter ///////////

function removeDup(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(removeDup([1, 3, 2, 3, 4, 4, 5]))


///// using reduce /////////
function removeDup(arr) {
    return arr.reduce((acc, val) => {
        if (!acc.includes(val)) acc.push(val)
        return acc
    }, [])
}
console.log(removeDup([1, 3, 2, 3, 4, 4, 5]))
