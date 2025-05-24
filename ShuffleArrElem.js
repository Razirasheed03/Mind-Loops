let arr = ['apple', 'car', 'bike', 'javaScript']

function shuffleArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let c = Math.round(Math.random() * i);
        [arr[i], arr[c]] = [arr[c], arr[i]];
    }
    return arr;
}
console.log(shuffleArr(arr))