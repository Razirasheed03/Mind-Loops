//////// using object (hashmap) /////////
function frequencyCount(arr) {
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  return freq;
}

let nums = [2, 3, 2, 5, 3, 2, 1, 5];
console.log(frequencyCount(nums));


///// using map method /////

