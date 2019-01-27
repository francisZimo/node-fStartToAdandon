//流 是基于事件的
//发布订阅
let EventEmitter=require('events');
let {inherits} = require('util')
function Girl(){}
let girl=new Girl();
inherits(Girl,EventEmitter);
let fn=function(param){
    console.log('笑',param);
}
girl.on('失恋',fn)
girl.once('失恋',function(param){
    console.log('哭',param)
})
girl.on('失恋',function(param){
    console.log("闹",param);
})
let fn1=function(param){
    console.log("饿",param);
}
girl.on('失恋',fn1)
girl.emit('失恋','我');
girl.removeListener('失恋',fn1)
girl.emit('失恋','我');
//remove once on emit