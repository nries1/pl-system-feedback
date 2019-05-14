const http=require('http');
const fs = require('fs');
const express = require('express')
const app = express();
app.get('/form', (req,res) => {
    res.sendFile(__dirname+"/form.html");
});
app.get('/submit', (req,res) => {
    res.send("Thank you for your feedback.")
});
/*let app = http.createServer((req, res) => {
  console.log("request url: "+req.url);
    fs.readFile(__dirname+"/form.html",(err,data) => {
        res.writeHead(200);
        res.end(data);
        if (err) {
            console.log(err);
        }
    });
  if (req.url==="/submit") {
        console.log("submitted");
  }
  //} else {
  //    console.log("no recognized url");
  //}
});*/

app.listen(3000, () => {console.log('main.js listening on port 3000')});
