const express = require('express')
const app = express()
const port = 5000

function sum(counter){
  var sum=0;
  for(var i=0;i<counter;i++){
      sum+=i;
  }
  return sum;
}

function handlefirstreq(req,res){
  var counter=req.query.counter;
  var sumis=sum(counter);
  res.send("The sum is " + sumis);
}

app.get('/handlesum',handlefirstreq)

function started(){
  console.log("Listening on port " + port);
}

app.listen(port,started)