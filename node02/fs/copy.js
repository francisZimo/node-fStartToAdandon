let fs=require('fs')
function copySync(source,target){ //带sync是同步 readFileSync+writeFileSync
    let result= fs.readFileSync(source)
    fs.writeFileSync(target,result)
}
function copy(source,target,callback){ //readFile writeFile
    fs.readFile(source,function(err,data){
        if(err) callback(err);
        fs.writeFile(target,data,callback)
    })
}
copy('1.txt','2.txt',function(err){
    if(err){
        throw err;
    }else{
        console.log('拷贝成功')
    }
})
//copySync()