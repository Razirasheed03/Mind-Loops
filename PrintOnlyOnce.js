function printUniqueElements(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
  
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
  
      if (count === 1) {
        result.push(arr[i]);
      }
    }
  
    console.log(result);
  }
  
  printUniqueElements([1, 2, 2, 3, 3, 3, 4]);
  