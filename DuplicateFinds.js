let arr=[1,2,3,4,5,3,2,6]
const hasDuplicate=arr.length!==new Set(arr).size
console.log(hasDuplicate)   /////////true cuz having duplicate values
