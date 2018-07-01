const https=require("https");
const express=require('express');
const fs=require('fs');
let app=express();
let opt={key:fs.readFileSync("./keys/private_key.pem"),
    cert:fs.readFileSync('./keys/johnyu.crt')};
let server=https.createServer(opt,app);
app.get("/books",(req,res)=>{
    res.send("heljdlsjflsj");
})
app.get("/book",(req,res)=>{
    res.send("aaaa");
})
server.listen("9000",(err)=>{
    if(err) console.log(err);
    console.log("htts start....");
})