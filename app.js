const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=80;
app.use('/static', express.static('static'));
app.use(express.urlencoded());
//setting template engine as pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
//Endpoints
app.get('/',(req,res)=>{
    const con="this is good";
    const params={ 'title':'good game', "content":con }
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
  //  let name=res.body.name;
  //  let email=res.body.email;
  //  let phone=res.body.phone;
    console.log(req.body);
    let name=req.body.name;
    const c=`${name} is a good `;
    fs.writeFileSync("output.txt",c)
    const mess={"message":"Form submitted"};
    res.status(200).render("index.pug",mess);
})
app.listen(port,()=>{
    console.log("THe appc started");
});
