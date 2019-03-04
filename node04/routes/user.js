let express=require('express');
let router=express.Router(); //创建一个路由池子
let path=require('path');
router.get('/login',function(req,res){
    res.send('登陆')

})
router.get('/reg',function(req,res){
    // res.send('注册')
    // res.sendFile(path.resolve('../views/reg.html'))  //path.resolve 是根据运行的文件的位置来解析的，所以此时不能用resolve
    res.sendFile(path.join(__dirname,'../views/reg.html'))
})
router.post('/reg',function(req,res){
    res.render('result.ejs',req.body);
    // console.log(req.body)
    // console.log(req.headers['content-type']);
    // let str='';
    // req.on('data',function(chunk){
    //     str+=chunk;
    // })
    // req.on('end',function(){
    //     console.log(require('querystring').parse(str)); //node自带的模块
    //     // let str='username=admin&password=tim';
    //     // let obj={};
    //     // str.replace(/([^&=]+)=([^&=]+)/g,function(){
    //     //     obj[arguments[1]]=arguments[2]
    //     // })
    // });
})


module.exports=router;