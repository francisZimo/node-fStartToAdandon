//在命令里设置  set NODE_ENV=dev
console.log(process.env.NODE_ENV)
//在webstorm中设置 edit configurations ，配置环境
//如果代码放到服务器上，那就没有此环境变量，取不到可以走上线环境
let url='';
if(process.env.NODE_ENV=='dev'){
    url='http://localhost:8080'
}else{
    url='http://www.zzz.com'
}
console.log(url)
//异步的，在当前队列底部
process.nextTick(function(){
    console.log('nextTick')
})
//第二个队列中的
setImmediate(function(){
    console.log('setImmediate');
})
//扩展运算符  展开运算符
console.log(...[1,2,3],...[4,5,6])

setTimeout(function(...arg){ //剩余运算符
    console.log('setTimeout')
    console.log(arg) //this指向的是timeout自己,防止指向自己用箭头函数
},200,'参数传参');


