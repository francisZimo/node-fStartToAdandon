var util=require('util')
var fs=require('fs')

var http=require('http')


//1.typeof 判断不了对象数据类型
//2. instanceof 不能判断继承后的
//3. constructor
//4. Object.prototype.toString.call([])=='[Object Array]'

//util 工具模块 核心模块|内置模块，不需要安装直接使用
//util.inherits
//util.isArray, isFunction
//util.promisify 把方法转换成promise

//let read =util.promisify(fs.readFile) //把一个函数promise话
//read('xxx','utf-8').then()


function Parent(){
    this.smoking='抽烟'
}
Parent.prototype.sleep='睡觉'
function Child(){}
util.inherits(Child,Parent); //继承公有
let child=new Child();
console.log(child.sleep)
console.log(child.smoking)
