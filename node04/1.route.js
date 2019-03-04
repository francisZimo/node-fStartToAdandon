let express=require('express');
let app=express();

app.listen(8089,function(){
    console.log('启动成功');
})
// /user/login
let user=require('./routes/user')
let bodyParser=require('body-parser');
//解析表单格式 把表单内的数据 解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}));
//解析json格式 把json格式转换为对象 解析后放在req.body上
app.use(bodyParser.json())
// function bodyParser(){
//     return function(req,res,next){
//         let str='';
//         req.on('data',function(chunk){
//             str+=chunk;
//         })
//         req.on('end',function(){
//             req.body=require('querystring').parse(str);
//             next();
//         })
//     }
// }
app.use(bodyParser());
app.use('/user',user);

// /article/post
let article=require('./routes/atricle');
app.use('/article',article);
