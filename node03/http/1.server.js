let http=require('http');
let port=3000;
let server= http.createServer(function(req,res){ //监听函数，当请求来时会执行毁掉函数
    //req代表客户端  可读流
    //res代表服务器端 可写流
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.write('你好',function(){
        console.log('写入成功');
    });
    res.end('结束');


})
server.listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
})


