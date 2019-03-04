//30b 一次读取4b 读取5次  读取第一次就开始写 只能写1b 暂停读取，当drain后的再恢复读取
let fs=require('fs');
function pipe(source,target){
    let rs=fs.createReadStream(source,{highWaterMark:8})
    let ws=fs.createWriteStream(target,{highWaterMark:1})
    //开启可读流
    //rs.on('data',function(chunk){
    //    if(ws.write(chunk)===false){ //可写流不能再继续写入了
    //        rs.pause();
    //    }
    //})
    //ws.on('drain',function(){
    //    console.log('干了几次')
    //    rs.resume(); //当当前读入的内容都写入到了文件中，调用继续读取
    //})
    //rs.on('end',function(){ //当读取完毕  强制将内存中未写完的内容写入到文件中，关闭文件
    //    ws.end();
    //})
    rs.pipe(ws)//将读到的内容自主写入
}
pipe('1.txt','2.txt')