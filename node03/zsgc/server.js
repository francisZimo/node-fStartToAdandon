let http=require('http');
let fs=require('fs');
let url=require('url');
let path=require('path')
let port=3002;
let users=[{username:'wwwe',password:'admin',id:1},{username:'rte',password:'87522',id:2}]
let server= http.createServer(function(req,res){ //监听函数，当请求来时会执行毁掉函数
    let {pathname,query}=url.parse(req.url,true)
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','X-Requested-with');
    res.setHeader('Access-Control-Allow-Headers','Content-type');
    console.log(req.method)
    if(req.method==='OPTIONS'){ //options 试探性的 没有任何意义   有两个用途：1获取服务器支持的http请求方法  2.用来检查服务器的性能。例如ajax进行跨域请求时的预检，需要想另外一个域名的资源发送一个http options请求头，用来判断实际发送请求是否安全
        res.end();
    }
    // if(pathname==='/user'){ //如果是访问/user 就是对用户的增删改查
        console.log(req.method); //method方法全部大写
        // console.log(req.headers) //获取请求头 小写的
        let id=query.id; //在查询参数中取出id 查看是否有值， 有值就表示操作的是某个
        switch(req.method){
            case 'GET':
                if(!id){ //查询所有
                    res.setHeader('Content-Type','application/json;charset:utf-8')
                    res.end(JSON.stringify(users))
                }
                break;
            case 'POST':
                // res.setHeader('Content-Type','application/json;charset:utf-8')
                // res.end(JSON.stringify(users))
                let str='';
                req.on('data',function(chunk){
                    str+=chunk; //拼接后的结果是字符串
                })
                req.on('end',function(){
                    let user=JSON.parse(str);
                    //如果有数据，取最后一项的id+1， 没数据 直接默认是1
                    user.id=users.length?users[users.length-1].id+1:1;
                    users.push(user);
                    res.end(JSON.stringify(user))
                })
                break;
            case 'DELETE':
                if(id){
                    users=users.filter(item=>item.id!=id)
                    res.end(JSON.stringify({}))
                }
                break;
            case 'PUT':
                break;
        }

    }
    if(pathname==='/jsonp'){
        // console.log('进入接口')
        res.end(`${query.cb}('奇人')`)
    }
    if(pathname==='/clock'){
        res.end('2018/07/12')
    }
    fs.stat('.'+pathname,function(err,stats){
        console.log(err);
        if(err){
            res.statusCode=404; //找不到404
            res.end(`${pathname} not  found`);
            return;
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



})
server.listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
})


