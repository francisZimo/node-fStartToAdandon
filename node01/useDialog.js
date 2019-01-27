//调用写好的方法
//如果自己写的文件，通过./方式，文件模块(js,node,json后缀可以省略，他会自动添加)
//如果异步方法一般会有毁掉函数
//let dialog= require('./dialog.js');
let dialog= require('./dialog-es6.js');
console.log(dialog.title)
//var _dialog= new dialog.dialog()
//_dialog.$hide();