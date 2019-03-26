var http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/:num", (req, res) => {
  var num = Number(req.params.num);
  res.send(FibonacciSequence(num)); 
});

function FibonacciSequence(len) {
  var sequence = [0, 1];

  for (var x = 1; x < len; x++) {
    sequence.push(sequence[x] + sequence[x - 1]);
  }
  return ArrayToString(sequence);
}
function ArrayToString(arr) {
  var str = "";

  for (var y = 0; y < arr.length; y++) {
    str = str + " " + arr[y];
  }
  return str;
}
