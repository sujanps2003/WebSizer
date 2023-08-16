import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'
import bodyParser from 'body-parser'

const app=express()
const port=3000
const __dirname=dirname(fileURLToPath(import.meta.url))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"homepage.html"))
})
app.get("/feedback",(req,res)=>{
    res.sendFile(path.join(__dirname,'feedback.html'))
})

app.post("/file",(req,res)=>{
    const filename=req.body['file']
    console.log(filename)
    res.sendFile(path.join(__dirname,"homepage.html"))
})
app.post("/feedback",(req,res)=>{
    const name=req.body['name']
    const email=req.body['email']
    const feedback=req.body['feedback']
    console.log(name+" "+email+" "+feedback)
    res.sendFile(path.join(__dirname,"homepage.html"))
})

app.listen(port,(req,res)=>{
    console.log("Port created")
})