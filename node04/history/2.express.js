let express=require('express')
//引用express模块，express是一个函数
let app=express();// express 函数执行后，返回的是一个http的监听函数，就是http.createServer中的函数
//在次函数上扩展了一个listen方法可以监听端口
// app.listen(8080,function(){
//     console.log('start 8080');
// });
app.listen1=function(...args){
    require('http').createServer().listen(...args)
}
app.listen1(8080,function(){
    console.log('start 8080');
});

