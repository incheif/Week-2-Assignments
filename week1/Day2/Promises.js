
function medicine1get(){
    console.log("Get medicine 1")
}
function medicine2get(){
    console.log("Get medicine 2")
setTimeout(medicine1get,5000)
}
setTimeout(medicine2get,1000)





function promisebody(resolve){
    setTimeout(resolve,1000);
}
function medicineget(){
    var answer=new Promise(promisebody);
    return answer;
}
//intimate after 5 seconds.

function printthing(){
    console.log("Got medicine");
}
var medicinePromise=medicineget();
console.log(medicinePromise);
medicinePromise.then(printthing)