const num = [2, 3, 4, null, 6, "a", 3];

let evenNum = num.filter((number) => number % 2 == 0).reduce((a, b) => a + b);
console.log(evenNum);
