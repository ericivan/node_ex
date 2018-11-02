const express=require('express')

const cookieParser=require('cookie-parser')

const cookieSesson=require('cookie-session')


const app=new express()

server.keys=['eric','shirley']

app.use(cookieParser("secres-salt"))

app.use(cookieSesson())


app.use("/",(req,res)=>{

})

app.listen(3000);