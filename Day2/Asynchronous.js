//Asynchronous functions
function printScreen(){
    console.log("Hello Dhruv")
}
setTimeout(printScreen,1000);
let counter=0;
for(let i=0;i<100000;i++){
    counter++;
}
console.log(counter);
