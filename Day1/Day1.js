let person = [{
  name: "dhruv",
  age:200,
  city: "New Delhi"
},{
    name: "John",
    age: 30,
    city: "New York"
}];
person[0].name = "Jane"; // Modify the value of a property
person[0].job = "Developer"; // Add a new property
person[1].job = "Cleanerś"; // Add a new property
delete person.city; // Delete a property


function triangle(n){
  for(let i=0;i<n;i++){
    let s="";
    for(let j=0;j<=i;j++){
      s+='*';
    }
    console.log(s);
  }
}


function pattern2(n){
  for(let i=0;i<n;i++){
    let s="";
    for(let j=0;j<=i;j++){
      s+='**';
    }
    console.log(s);
  }
  return "THank You";
}

function complexfn(n){
  sum=0;
  for(let i=0;i<n;i++){
    sum+=i;
  }
  return sum;
}
var startTime=new Date().getTime();
complexfn(1000000)
var endTime=new Date().getTime();
console.log((endTime-startTime)/1000);


//Asynchronous nature of js.
function printscreen(){
  console.log("1 second passed");
}
setTimeout(printscreen,1000);
