let fs=require('fs');
//既有同步又有异步方法

//同步的读取
//1.读取文件 文件必须存在。 不能通过/去读内容  /表示的是根目录
//2. 读取的默认类型是buffer
//let result=fs.readFileSync('1.fs.js','utf8')
//console.log(result);
//第一次的输出是下一次的输入
//let content1=fs.readFileSync('./test1.txt','utf8');
//let content2=fs.readFileSync(content1,'utf8');
//console.log(content2);

//异步 fs.readFile('index.js')
//自己封装promise
//function read(url){
//    return new Promise((resolve,reject)=>{
//        fs.readFile(url,'utf8',function(err,data){
//            if(err) return reject(err);
//            resolve(data);
//        })
//    })
//
//}
let util=require('util');
let _read=util.promisify(fs.readFile)
_read('./test1.txt','utf8').then(function(data){
    return _read(data,'utf8')
}).then(function(data){
    console.log(data)

}).catch((err)=>{
    //处理错误，如果写了错误callback走自己的，如果没有写统一走catch
    console.log(err);
})
//流程控制
console.time('start')

//async await es7语法 node版本至少是7.9+
async function result(){
    let content1=await _read('./test1.txt','utf-8');
    let content2=await _read(content1,'utf8')
    content2+='tom';
    console.log(content2);
}
result();
console.timeEnd('start')

//promise.all([p1,p2,p3]).then()
//promise 解决的问题1.回调地狱 2.合并异步的返回结果 3.async ,await 简化promise写法的语法糖
