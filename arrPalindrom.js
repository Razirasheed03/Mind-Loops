function PalinromeArr(arr){
    let first=0
    let last=arr.length-1
    while(first<last){
        if(arr[first]!==arr[last]){
            return false
        }
        first++
        last--
    }
    return true
}
// console.log(PalinromeArr([1,2,3,3,2,1]))
