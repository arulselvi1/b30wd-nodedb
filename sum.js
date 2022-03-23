const sum = (a, b) => a + b;

const n = process.argv[2];
const n1 = process.argv[3];
console.log(process.argv);
console.log(sum(+n, +n1)); // String to number conversion
