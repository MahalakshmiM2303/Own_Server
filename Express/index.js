const express=require('express')
const app=express()
const port=8080
app.get('/',(req,res)=>{
    res.send("Hello Mahalakshmi This is your Own Server")
})
app.listen(port)