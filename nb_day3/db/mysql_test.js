const mysql=require("mysql");

let connection=mysql.createConnection({host:"localhost"
    ,port:3306,user:"root",password:"123",database:"test"});

connection.connect((err)=>{
    if(err) console.log(err);
    let u="john'; -- '";
    //let u="john";
    let p="1234";
    //let sql="select * from users where username='"+u+"' and password='"+p+"'";
    let sql="select * from users where username=? and password=?";
    let sql1="update users set username=? where id=?";
    connection.query(sql1,["tomliu",2],(err,rs)=>{
        console.log(rs);
        connection.end();
    });



});