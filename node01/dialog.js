//写好的方法
function Dialog(){
    this.time=3000;
}
Dialog.prototype.$show=function(){
    console.log('show')
}
Dialog.prototype.$hide=function(){
    console.log('hide')
};
Dialog.title='弹窗';//只能类调用
//exports={
//    dialog:Dialog
//}
//exports.dialog=Dialog

module.exports= {
    dialog: Dialog
}
/*
function (exports,module,require){
    module.exports=exports=this={};
    //写的代码
    //exports.xxx=Dialog;//给exports赋予属性可以导致module.exports的指向
    return module.exports;
}
*/

(function(){})()