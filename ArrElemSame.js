function checkBothArrSame(arr1,arr2){
    let first=arr1.join('')
    let second=arr2.join('')
    if(first===second){
        return true
    }else{
        return false
    }
}
console.log(checkBothArrSame([1,2,3,4,5], [1,2,3,4,5]))