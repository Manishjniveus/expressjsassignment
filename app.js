const { prototype } = require('events');
const express= require('express');
const app= express();
const bodyparser= require('body-parser');
const myObj= require('./users')
const port= process.env.PORT || 8080;

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());


console.log(myObj);
// console.log(myObj.users.some((ele)=>ele.id==1));
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    let myJson=[];
    if(myObj.users.some((ele)=>ele.id === parseInt(req.params.id))){
        myJson=myObj.users.filter((ele)=>ele.id === parseInt(req.params.id));
    }
    res.json({status:200,message:'get response',data:myJson});
})


app.post('/users',(req,res)=>{
   
    const sentence=`Done: User ${req.body.user} Id ${req.body.id}`;
    console.log(sentence);
    res.json({status:200,message:'post response',data:sentence});
})

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`);
})
