let http=require('http');
let fs=require('fs');
let url=require('url');
let path=require('path')
let mime=require('mime');

let port=3001;
let server= http.createServer(function(req,res){ //监听函数，当请求来时会执行毁掉函数
    let {pathname,query}=url.parse(req.url,true);
    // clock

    fs.stat('.'+pathname,function(err,stats){
        console.log(err);
        if(err){
            res.statusCode=404; //找不到404
            res.end(`${pathname} not  found`);
        }else if(stats.isFile()){ //是文件的情况
            //没有写头？！！！
            let extName=pathname.match(/\.\w+$/)
            console.log('匹配'+extName);
            // res.setHeader('Content-Type',mime[extName]+';charset=utf8')
            res.setHeader('Content-Type',mime.getType(pathname)+';charset=utf8')
            fs.createReadStream(__dirname+pathname).pipe(res);
        }else if(stats.isDirectory()){ //如果是文件夹默认访问index.html
            // ./也是一个文件夹,获取到当前的路径和我的index.html进行拼接去读取，这个文件也有可能不存在
            let p=path.join(__dirname,'.'+pathname,'./test.html'); //拼出来的要读取的内容
            fs.createReadStream(p).pipe(res);

        }
    })
    if(pathname==='/clock'){
        let date=new Date();
        res.end(JSON.stringify({time:date.toLocaleString()}));
        return;
    }

})
server.listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
})


