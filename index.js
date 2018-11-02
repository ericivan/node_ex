const express=require('express')

const cookieParser=require('cookie-parser')

const app=new express()

app.use(cookieParser)

app.use("/",(req,res)=>{
    res.cookie("test","test_cookie");

    // console.log(req.cookies)
    res.send("cookie has set")
})

app.listen(3000);