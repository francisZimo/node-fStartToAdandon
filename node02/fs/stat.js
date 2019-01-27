let fs=require('fs');
//stat
fs.stat('./1.txt',function(err,stats){
    //console.log(err,stats)
    if(err){/*文件不存在*/}
    //console.log(stats.isFile()); //判断是不是文件
    //console.log(stats.isDirectory()); //判断是不是文件夹

})
//atime access time
//mtime modify time
//ctime change time
//birthtime
//fs.mkdir('a/b',function(err){
//    console.log(err);
//})

function makep(url,cb){ //插入排序
    // a, a/b, a/b/c, a/b/c/d
    let urlArr=url.split('/');
    let index=0;
    console.log(urlArr);
    function make(path){
        console.log(path);
        if(urlArr.length<=index) return console.log('跳出了');
        //在创建之前看是否存在 如果不存在创建，存在继续下一次创建
        fs.stat(path,function(err){
            if(err){
                fs.mkdir(path,function(err){
                    console.log(err)
                    make(urlArr.slice(0,++index+1).join('/'))
                })
            }else{
                make(urlArr.slice(0,++index+1).join('/'))
            }
        })
    }
    make(urlArr[index])
}
makep('a/b/c/d',function(err){
    console.log('创建成功');

})