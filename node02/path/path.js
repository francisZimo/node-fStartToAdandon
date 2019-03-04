let path=require('path');
//拼接一个路径出来
// console.log(path.join(__dirname,'./b/c'))
// console.log(__dirname);
//解析一个绝对路径出来
console.log(path.resolve(__dirname,'./a','../../b'))
//看一下系统的分隔符
// console.log(path.delimiter);  //环境变量分隔符
// console.log(path.win32.delimiter)
// console.log(path.posix.sep);



