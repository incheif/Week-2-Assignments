const express = require('express')
const app = express()
const port = 5000
var bodyParser=require('body-parser')
function sum(counter){
  var sum=0;
  for(var i=0;i<counter;i++){
      sum+=i;
  }
  return sum;
}
function mul(counter){
  var mul=1;
  for(var i=1;i<counter;i++){
      mul+=i;
  }
  return mul;
}

// function middleware(req,res,next){
//     console.log("from inside middleware"+req.headers.counter)
//     next()
// }
// // app.use(middleware);
app.use(bodyParser.json())

function handlefirstreq(req,res){
  console.log(req.body)
  var counter=req.body.counter;
  var sumis=sum(counter);
  var mulis=sum(counter);
  var answerobect={
    sum:sumis,
    mul:mulis
  }
  res.send(answerobect);
}

app.post('/handlesum',handlefirstreq);



function started(){
  console.log("Listening on port " + port);
}

app.listen(port,started);