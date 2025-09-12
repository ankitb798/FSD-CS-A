const add = (a = 5, b = 0) => a + b;

console.log("sum=" + add()); // uses default values (5 + 0 = 5)
console.log("sum=" + add(10, 7)); // 17
