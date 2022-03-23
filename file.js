const fs = require("fs");

const quote = " No pain no gain";
fs.writeFile("names.html", quote, (err) => {
  console.log("Completed writing");
});
const fs1 = require("fs");
const quote1 = " live more worry less";
for (let i = 1; i <= 10; i++) {
  fs1.writeFile(`./backup/text${i}.html`, quote1, (err) => {
    console.log("Completed writing", `text${i}.html`);
  });
}
// const double = (num) => num * 2;

// const n = process.argv[2];
// console.log(process.argv);
// console.log(double(n));

const quote2 = " Happy women's Day";
console.log(process.argv);
const noOfFiles = process.argv[2];

for (let i = 1; i <= noOfFiles; i++) {
  fs1.writeFile(`./backup/newfile${i}.html`, quote2, (err) => {
    console.log("Completed writing", `newfile${i}.html`);
  });
}

fs.readFile("./cool.txt", "utf-8", (err, content) => {
  if (err) {
    console.log("❌", err);
  }
  console.log("Book:", content);
});

//Append a file content - override a content
const niceQuote = "\n Make hay while sun shines";
fs.appendFile("./nice.txt", niceQuote, (err) => {
  console.log("Updated file!!! 😊");
});

//delete a file
fs.unlink("./delete.css", (err) => {
  console.log("File Deleted");
});

//To read a directory
//here array of files names is got
//Delete all files in backup
fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
  files.forEach((fileName) =>
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted File!!!");
    })
  );
});
