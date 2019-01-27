let fs=require('fs');
//读取类型都是buffer, 写入的时候utf8
// 读取的文件必须存在，写的时候不存在会自动创建，里面有内容会覆盖掉
fs.writeFile('1.txt',Buffer.from('tom love francis'),function(err){
    if(err){
        console.log(err);
        return;
    }
})
