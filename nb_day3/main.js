let mongoose=require('./models/common-model');
let server=require('./app');

let dburl="mongodb://localhost:27017/test9";
let port=9001;
mongoose.connect(dburl,(err)=>{
    if(err) console.log(err);
    server.listen(port,(err)=>{
        if(err) console.log(err);
        console.log("server started!!!")
    })
})