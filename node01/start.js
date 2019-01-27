//每个文件都有局部作用域，不会将属挂载在global上
a=1;
console.time('start')
for (var i = 0; i < 10000; i++) {


}
console.timeEnd('start')
console.log(process.env.NODE_ENV)
let url='';
if(process.env.NODE_ENV=='dev'){
    url='http://localhost:8080'
}else{
    url='http://www.zzz.com'
}
console.log(url);

process.nextTick(function(){
    console.log('nextTick')
})
//第二个队列中的
setImmediate(function(){
    console.log('setImmediate');
})
setTimeout(function (...arg){
    console.log('setTimeout');
    console.log(arg)
},0,'参数传参')