let http=require('http'),
    url=require('url'),
    fs=require('fs');
let server=http.createServer(function(req,res){
    let urlObj=url.parse(req.url,true),
        pathname=urlObj['pathname'],
        query=urlObj['query'];
    //静态资源文件的请求处理：服务端接收到具体的请求文件后把文件中的源代码返回给客户端进行渲染即可
    let reg=/\.(html|js|css|ico)/i;
    if(reg.test(pathname)){
        let suffix=reg.exec(pathname)[1].toUpperCase();
        let suffixMIME='text/html';
        switch (suffix){
            case "CSS":
                suffixMIME='text/css';
                break;
            case "JS":
                suffix='text/javascript';
                break;
        }
        try{
            let conFile=fs.readFileSync('.'+pathname,'utf-8');
            res.writeHead(200,{'content-type':suffixMIME+'; charset=utf-8'});
            res.end(conFile);
        }catch(e){
            res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});
            res.end('file is not found');
            return;
        }
    }
    //API数据接口请求
    let customPath='./json/student.json';
    let con=fs.readFileSync(customPath,'utf-8');
    con=JSON.parse(con);
    if(pathname=='/getList'){
        let n=query["n"];
        ary=[];
        for (let i = (n-1)*10; i <= n*10-1; i++) {
            //通过规律计算的索引比最大的索引都要大，直接跳出即可，不需要再存储了（已经是最后一页）
            if(i>con.length-1){
                break;
            }
            ary.push(con[i]);
        }
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
        res.end(JSON.stringify({
            code:0,
            msg:'成功',
            total:Math.ceil(con.length),
            data:ary
        }))
        return;
    }
    if(pathname='/getInfo'){
        let studentId=query['id'],
            obj=null;
        for (let i = 0; i < con.length; i++) {
           if(studentId==con[i]['id']){
               obj=con[i];
               console.log('有啊')
               break;
           }
        }
        let result={
            code:1,
            msg:'内容不存在',
            data:null
        }
        if(obj){
            result={
                code:0,
                msg:'成功',
                data:obj
            }
        }
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'});
        //res.end(JSON.toString(result));
        console.log('进行到这一步')
        res.end(JSON.stringify(result));
        return;
    }
    //请求接口不存在的话，返回404
    res.writeHead(400, {'content-type':'text/plain;charset=utf-8'});
    res.end(JSON.stringify({
        code:1,
        msg:'内容不存在',
        data:null
    }))


});
server.listen(8082,function(){
    console.log('server is success,listening on 8082 port!')
})