//1.回调地域 链式写法 then
//2. 解决同步异步的结果promise.all  如果成功才算成功，有一个失败了就失败了 ,promise.race(),谁快以谁为准，得到结果以后就结束

//promise类上拥有两个方法可以把结果包装成promise对象 reject resolve（上来就失败或者成功）
Promise.reject('123').then(function(data){
    return data+456
}).then(function(data){
    "use strict";
    console.log(data);
}).catch(err=>{
    "use strict";
    console.log(err)
})
//如果程序 只执行一次可以同步。 readFile会把内容读到内存中，用这种方式会淹没可使用内存

