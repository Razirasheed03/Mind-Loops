let today = new Date();
let atoday = new Date();

console.log(today + 15);

atoday.setDate(today.getDate() + 15)

console.log(atoday.toDateString());


////// adding with milliseconds /////
let today2 = new Date();

// Add 15 days in milliseconds (1000ms * 60s * 60m * 24h * 15d)
let futureDate = new Date(today2.getTime() + 15 * 24 * 60 * 60 * 1000);

console.log(futureDate.toDateString());
