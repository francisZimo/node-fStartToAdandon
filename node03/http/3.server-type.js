let http=require('http');
let fs=require('fs');
let url=require('url');
let path=require('path')
let mime=require('mime');
// let mime={
//     '.js':'application/javascript',
//     '.css':'text/css',
//     '.html':'text/html'
// }
let port=3001;
let server= http.createServer(function(req,res){ //监听函数，当请求来时会执行毁掉函数
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    // fs.readFile('./node03/http/index.html',function(err,data){
    //     res.end(data)
    // })
    // let urlObj1=url.parse('http://username:password@localhost:3000/s?a=1&b=2#hash',true); //true的作用是将query转换为一个对象
    // console.log(urlObj1);
    let {pathname,query}=url.parse(req.url);
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
            let p=path.join(__dirname,'.'+pathname,'./index.html'); //拼出来的要读取的内容
            fs.createReadStream(p).pipe(res);

        }
    })
    //根据不同的额路径返回不同的内容
    //如果访问是/ 显示主页html
    //如果访问的是文件 将文件读取返回
    // 如果是文件夹 默认去找html文件
    // 文件不存在返回404

    // fs.createReadStream('./node03/http/index.html').pipe(res)

})
server.listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
})


