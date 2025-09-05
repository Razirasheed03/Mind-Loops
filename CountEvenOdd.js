function CountEvenOdd(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++
        } else {
            odd++
        }
    }
    console.log('count of even :', even)
    console.log('count of odd :', odd)

}
CountEvenOdd([2, 4, 6, 3, 1, 10])


/////// using filter method /////////
function CountEvenOdd(arr) {
    let even = arr.filter(num => num % 2 === 0).length;
    let odd = arr.filter(num => num % 2 !== 0).length;

    console.log('count of even :', even);
    console.log('count of odd :', odd);
}

CountEvenOdd([2, 4, 6, 3, 1, 10]);
