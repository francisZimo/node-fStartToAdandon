//中间件实现原理
function app(){}
//每次调用use方法都会讲方法存到数组中，默认调用数组的第一项，将next方法传递给数组的函数，如果调用次函数，会继续执行函数中的下一项
app.middleware=[];
app.use=function(cb){
    this.middleware.push(cb)
}
app.use(function(req,res,next){
    console.log(1);
    next();
})
app.use(function(req,res,next){
    console.log(2);
    // next();
})
app.use(function(req,res,next){
    console.log(3);
})
let index=0;
function next(){
    app.middleware[index++](null,null,next)
}
next();