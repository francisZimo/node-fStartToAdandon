let express=require('express');
let app=express();
app.listen(3000)
//不能直接返回对象 res.json() //返回json的
//返回html页面res.sendFile() //返回文件
//res.statusCode res.end=>res.sendStatus();
//res.end red.header() =>res.send()
app.get('/json',function(req,res){
    res.json({name:'小青',age:10000}) //响应json
})
app.get('/',function(req,res){ //不能通过../ 查找（root是不支持的）想要读取确切的文件用path模块运行拼接即可
    // res.sendFile(require('path').join(__dirname,'..','index.html')) //用上一级的方法
    res.sendFile('./index.html',{root:__dirname});
    //res.sendFile(__dirname+'./index.html')
})
app.get('/status',function(req,res){
    res.sendStatus(404);
})
app.use(function(req,res,next){
    res.mySend=function(data){

    }
    next();
})
app.get('/send',function(req,res){
    res.send({name:'xiaoming',age:20})
})