const express=require('express')

const cookieParser=require('cookie-parser')

const app=new express()

app.use(cookieParser("secres-salt"))

app.use("/",(req,res)=>{
    res.cookie('sign',"test_cookie",{signed:true});

    res.cookie("not-sign","test_not_sign_cookie")
    console.log(req.cookies)
    console.log('sign cookie')

    console.log(req.signedCookies)

    res.clearCookie("not-sign")
    res.send("cookie has set")
})

app.listen(3000);