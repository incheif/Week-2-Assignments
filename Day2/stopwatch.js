var counter =1;
function printCounter(){
    console.clear()
    console.log(counter);
    counter++;
}
setInterval(printCounter,1000);
counter=0;
for(let i=0;i<1000;i++){
    counter++;
}
console.log(counter);
