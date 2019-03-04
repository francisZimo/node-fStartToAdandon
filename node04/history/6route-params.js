let express=require('express')
let app=express();
app.listen(8088);
//拦截功能 在这里的req和res都是同一个
app.param('id',function(req,res,next){

    req.params.id=`你的学号是${req.params.id}`
    next(); //调用了next就可以向下匹配，如果在这里结束了请求那就不走了

});
app.param('name',function(req,res,next){
    req.params.name=`你的姓名是${req.params.name}`
    next(); //调用了next就可以向下匹配，如果在这里结束了请求那就不走了

});
app.get('/user/:id/:name',function(req,res){
    res.header('Content-Type','text/plain;charset=utf8');
    res.end(`${req.params.id}${req.params.name}`);
})