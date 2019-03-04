let express=require('express');
let app=express();
// let fs=require('fs');
app.listen(8080,function(){
    console.log('8080 端口启动成功')
});
app.use(express.static('node04/dist'))
app.use(express.static('node04/public'))
// function static(p){ //dist目录下的静态文件
//     return function(req,res,next){
//        let path= require('path').join(__dirname,p,req.path); //我们要读取的文件
//         fs.stat(path,function(err,stats){
//             if(err){
//                 return next();
//             }
//             if(stats.isFile()){
//                 fs.createReadStream(path).pipe(res)
//             }
//         })
//     }
// }
// app.use(static('dist')) //静态服务中间件
// app.use(static('public')) //静态服务中间件

