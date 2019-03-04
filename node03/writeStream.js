let fs=require('fs');
//可写流 默认要占用16384=16k
let ws=fs.createWriteStream('./11.txt',{highWaterMark:3});

var flag= ws.write('12356789',function(){
    console.log('异步');
}); //可写流有两个方法 write end res.write() res.end()

//
//var flag1=ws.write('2');
//var flag2=ws.write('3');
//var flag3=ws.write('4');
console.log(flag);
//console.log(flag1);
//console.log(flag2);
//console.log(flag3);

//ws.end(); //end 调用后会把write中的内容以最快速度写入文件
//ws.write('1-') //ws.end()后不能再用write
ws.on('drain',function(){  //deain 排水 流干  当读入的文件全部写入后我们就恢复读取
    console.log('吃完了');
})
//300K 64K 读取5次  读取第一次就开始写 只能写16K 暂停读取，当drain后的再恢复读取


