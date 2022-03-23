// console.log("Hello", "World");

// const double = (num) => num * 2;

// const n = process.argv[2];
// console.log(process.argv);
// console.log(double(n));

// console.log(global);

const fs = require("fs");
fs.writeFile("names.txt", data, (err) => {
  console.log("Completed writing");
});
