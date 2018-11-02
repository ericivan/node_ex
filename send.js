const axios=require('axios')

axios.post('',{
    name:"eric"
}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})

let url=''

axios.get(url).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})