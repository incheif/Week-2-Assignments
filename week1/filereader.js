const fs = require('fs').promises;

fs.readFile('file.txt','utf-8').then(fileisread);
function fileisread(data){
  const x = data; // Store the contents of the file in the variable 'x'
  console.log(complexfn()); // Call complexfn with the file contents
  console.log(x); // Call complexfn with the file contents
}
function complexfn() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += 1;
  }
  return sum;
}





