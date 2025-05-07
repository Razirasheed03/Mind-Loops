function removeDup(arr){
    let ar=[]
    for(let i=0;i<arr.length;i++){
        if(!ar.includes(arr[i])){
            ar.push(arr[i])
        }
    }
    return ar
}
console.log(removeDup([1,3,2,3,4,4,5]))