let express=require('express');
let app=express();
app.listen(3001)

app.get('/user',function(req,res){
    console.log(req.query.id);
    console.log(req.url); //获取整个路径包括问号的
    console.log(req.path);
    console.log(req.headers); //所有的都是小写的
    console.log(req.method); //所有的都是大写的
})