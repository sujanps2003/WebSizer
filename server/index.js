import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'
import bodyParser from 'body-parser'
import mysql from 'mysql2'

const app=express()
const port=3000
const __dirname=dirname(fileURLToPath(import.meta.url))
const connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'feedback'
});
// create connection.
connection.connect((err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log('successful connection');
    }
});
// End connection
// connection.end((err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('successful disconnected');
//     }
// })
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/feedback",(req,res)=>{
    res.sendFile(path.join(__dirname,'feedback.html'))
})

app.post("/feedback",(req,res)=>{
    const name=req.body['name']
    const email=req.body['email']
    const feedback=req.body['feedback']
    console.log(name+" "+email+" "+feedback)
    const insert= 'INSERT INTO record(name,email,feed) values (?,?,?)';
        connection.query(insert,[name,email,feedback],(err,result)=>{
            if(err){
                console.error("Error:- ",err);
                return;
            }
            else{
                console.log("Result :- ",result);
            }
        });
    res.render('acknowledge.ejs',{name});
    // res.sendFile(path.join(__dirname,"homepage.html"))
})
app.post('/return',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.listen(port,(req,res)=>{
    console.log("Port created")
})
