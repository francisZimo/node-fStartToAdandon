---add to path

---我的电脑->属性->环境变量->path
## 用node
node 文件名
```
node A.js
```
## nodeJs
- 主线程是单线程(callback)
- i/o操作，读写操作，异步读写（能用异步就不要用同步）
- event-driven 事件驱动(发布订阅)


## web异步
- setTimeout
- callback
- onclick
- ajax


## 全局变量
- console  //console.info/error/warn/log/time/timeEnd
```
 console.time('start')
 console.timeEnd('start'')
```

- process 进程 设置环境变量(在命令行中设置NODE_ENV, mac export/windows set)

```
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
},0,'参数传参')

```


- Buffer 缓存区 文件读写进缓存区
- clearImmediate setImmediate
- clearTimeout