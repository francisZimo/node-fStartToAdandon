let http=require('http')
let url=require('url')
//1.当访问/sign in 返回登录
//2.当访问/sign up 返回注册
//3.访问其他时 返回404
http.createServer(function(req,res){
    //路由：根据不同的路径返回不同的内容
    let {pathname,query}=url.parse(req.url,true);
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    if(pathname==='/signin'){
        let str='';
        req.on('data',function(chunk){
            str+=chunk;
        })
        req.on('end',function(){
            console.log(str);
        })
        return res.end('登录')
    }
    if(pathname==='/signup'){
        return res.end('退出')
    }
    res.end('404');
}).listen(4000)