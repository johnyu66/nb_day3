const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const bookRouter=require('./routers/book-router');
let app=express();
let server=http.createServer(app);

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Allow-Control-Access-Mehtods","GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});



app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("welcome book manager!!1");
});
app.use('/books',bookRouter);


module.exports=server;