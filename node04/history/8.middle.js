let express=require('express');
let app=express();
app.listen(3002);
app.use(function(req,res,next){
    let t=new Date().getTime(); //访问最初的时间
    let end=res.end;
    res.end=function(...args){
        console.log('mine');
        console.log(new Date().getTime() - t);
        end.call(res,...args)
    }

    next();
})
app.get('/water',function(req,res){
    for (let i = 0; i < 999999999; i++) {

    }
    res.end('water')
})

app.get('/food',function(req,res){
    for (let i = 0; i < 999999999; i++) {

    }
    res.end('food')
})

