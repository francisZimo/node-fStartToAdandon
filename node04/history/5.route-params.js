let express=require('express');
let app=express();
app.listen(3002)
// /user?id=1 差一个 /user 查所有 路径都是/user
// /user/1 表示查一个 /user 查所有区分查多个还是查一个
app.get('/user',function(req,res){
    res.end('select all')
})
// 表示id是占位符 必须有但是可以随机
// /user/1/2=>{id:1,name:2}=>params  --对应的关系
app.get('/user/:id/:name',function(req,res){
    res.end('select one'+req.params.id+req.params.name)
})
let url='/user/3/5/a'
let url2='/user/:id/:name/a' //=>{id:1,name:2} {id,name}
//将url2转化成一个可以匹配的url的正则
let arr=[];
let newReg= url2.replace(/:[^\/]+/g,function(){
    arr.push(arguments[0].slice(1)); //[id,name]
    return '([^\/])+'
})
let reg=new RegExp(newReg);
let newArr=reg.exec(url);
let result={};
arr.forEach(function(item,index){
    result[item]=newArr[index+1]
})
console.log(result);
