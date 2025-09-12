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
function frequencyCount(arr) {
  let freq = new Map();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return freq;
}

// Example
// let nums = [2, 3, 2, 5, 3, 2, 1, 5];
console.log(Object.fromEntries(frequencyCount(nums)));
// Output: { '1': 1, '2': 3, '3': 2, '5': 2 }

