var http=require('http'),
    url=require('url'),
    fs=require('fs');
var server=http.createServer(function(req,res){
    let urlObj=url.parse(req.url,true),
        pathname=urlObj.pathname
        query=urlObj.query; //query 存储的是客户端请求的url地址中问号传参后面的信息
    //静态资源文件请求的处理
    let reg=/\.(html|css|js|ico)/i;
    if(reg.test(pathname)){
        let suffix=reg.exec(pathname)[1].toUpperCase();
        let suffixMIME='text/html';
        switch(suffix){
            case "CSS":
                suffixMIME='text/css';
                break;
            case "JS":
                suffixMIME='text/javascript';
                break;
        }
        try{
            let conFile=fs.readFileSync('.'+pathname,'utf-8');
            res.writeHead(200,{'content-type':suffixMIME+';charset=utf-8;'})
            res.end(conFile)
        }catch(e){
            res.writeHead(404,{'content-type':'text/plain;charset=utf-8;'})
            res.end('file is not found');
            return;
        }
    }
    //API数据接口的请求
    //1.获取所有的客户信息
    var con=null,
        result=null,
        customId=null,
        customPath='./json/customer.json';
    //首先把customer.json中的内容都获取到
    con=fs.readFileSync(customPath,'utf-8');
    con.length===0?con='[]':null;//为了防止我们custom.json中什么也没有，con也是一个空字符串，我们会使用JSON.parse转换的时候会报错
    con=JSON.parse(con);
    if(pathname==='/getList'){
        //开始按照API文章的规范给客户端返回的数据
        result={
            code:1,
            msg:'没有任何的客户信息',
            data:null
        };
        if(con.length>0){
            result={
                code:0,
                msg:'成功',
                data:con
            }
        }
        res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
        res.end(JSON.stringify(result));
        return;
    }
    //2.获取具体某一个客户的信息根据客户id
    if(pathname==='/getInfo'){
        //把客户端传递进来的ID获取到
        customId=query['id'];
        result={
            code:1,
            msg:'客户不存在',
            data:null
        };
        for (var i = 0; i < con.length; i++){
            if(con[i]['id']==customId){
                con=con[i];
                result={
                    code:0,
                    msg:'成功',
                    data:con
                    }
                break;
                }
        }
        res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
        res.end(JSON.stringify(result));
        return;
    }
    //3.根据id删除用户
    if(pathname==='/removeInfo'){
        customId=query["id"];
        var flag=false;
        for (var i = 0; i < con.length; i++) {
            if(con[i]['id']==customId){
                con.splice(i,1);
                flag=true;
                break;
            }
        }
        result={
            code:1,
            msg:'删除失败'
        }
        if(flag){
            fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
            result={
                code:0,
                msg:'删除成功'
            }
        }
        res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
        res.end(JSON.stringify(result));
        return;
    }
    //4.增加客户信息
    if(pathname==='/addInfo'){
        //获取客户端通过请求主体传递进来的内容
        var str='';
        req.on("data",function(chunk){ //chunk实时传输的数据
            str+=chunk;
        })
        req.on("end",function(){ //接收数据完毕
            if(str.length===0){
                res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
                res.end(JSON.stringify({
                    code:1,
                    msg:'增加失败,没有传递任何需要增加的信息'
                }));
                return;
            }
            var data=JSON.parse(str);
            //在现有的id中追加一个ID：获取con中最后一项的ID，ID+1=>新ID
            data['id']=con.length===0?1:parseInt(con[con.length-1]['id'])+1;
            con.push(data);
            fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
            res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
            res.end(JSON.stringify({
                code:0,
                msg:'增加成功'
            }));
        });
        return;
    }
    //5.修改客户信息
    if(pathname==='/updateInfo'){
        var str='';
        req.on("data",function(chunk){
            str+=chunk;
        });
        req.on("end",function(){
            if(str.length===0){
                res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
                res.end(JSON.stringify({
                    code:1,
                    msg:'修改失败，修改信息为空'
                }));
            }
            var data=JSON.parse(str);
            var flag=false;
            for (var i = 0; i < con.length; i++) {
                if(con[i]['id']==data['id']){
                    con[i]=data;
                    flag=true;
                    break;
                }
            }
            if(flag){
                fs.writeFileSync(customPath,JSON.stringify(con),'utf-8');
                res.writeHead(200,{'content-type':'application/json;charset:utf-8'});
                res.end(JSON.stringify({
                    code:0,
                    msg:'修改成功'
                }));

            }
        });
        return;
    }

    res.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
    res.end(JSON.stringify({
        code:1,
        msg:'请求接口不存在'
    }))


    
})
server.listen(8082,function(){
    console.log('server is success, listening on 8082 port')
})