let express=require('express')
let app=express();
app.listen(3000);
//app监听函数上 扩展了很多方法 包括get post delete put RESTfull风格中的东西

//app. 方法名（'路径名',fn）
//从上到下匹配如果匹配到了并且结束响应 就不会继续向下走
//路径指的是pathname 没有问号后面的内容
//express 重点是扩展了req和res的属性
app.get('/signin',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf8')
    res.end('登陆')
})
app.post('/signin',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf8')
    res.end('post登陆')
})
app.all('*',function(req,res){
    res.end('404')
})