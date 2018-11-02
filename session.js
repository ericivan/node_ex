const express=require('express')

const cookieParser=require('cookie-parser')

const cookieSesson=require('cookie-session')


const app=new express()


app.use(cookieParser("secres-salt"))

app.use(cookieSesson({
    name:"sess",
    keys:['eric','shirley'],
    maxAge:100000
}))


app.use("/",(req,res)=>{
    req.session['username']='ericivan'

    console.log(req.session)

    res.send("session set")

})

app.listen(3003);