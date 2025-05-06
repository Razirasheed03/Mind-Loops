//////////////// using built in methods ///////////////

function maxFinder(arr){
    let maximumVal=Math.max(...arr)
    return maximumVal
}
// console.log(maxFinder([1,4,2,5,9,12]))

//////////////// using loops /////////////////

function MaxFind(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(MaxFind([1,4,23,2,4,44]))