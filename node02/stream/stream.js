//流  可读流和可写流
//流：边读边写 不是疯狂的读
let fs=require('fs');
//highWaterMark 每次能读取多少 默认64K我们默认不需要更改
// 读取默认的buffer类型
let rs=fs.createReadStream('1.txt',{highWaterMark:5});
//需要监听事件 数据到来的的事件 rs.emit('data','数据')
//默认非流动模式=>流动模式
let arr=[];
rs.on('data',function(chunk){
    console.log(chunk)
    arr.push(chunk)
    rs.pause(); //暂停 暂停的是on('data')的触发
    setTimeout(function(){
        rs.resume(); //恢复on('data')的触发
    },1000)
})
//默认data事件是不停的触发，直到文件中的数据全部读出来

rs.on('end',function(){
    console.log('end');
    console.log(Buffer.concat(arr).toString());
})
rs.on('err',function(err){
    //文件不存在 错误

})

//on('data') on('err') on('end') resume() pause()
