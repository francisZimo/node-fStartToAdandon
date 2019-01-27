class Dialog{
    constructor(){
        this.time=300;
    }
    $show(){
        console.log('show');
    }
    $hide(){
        console.log('hide');
    }

}
Dialog.title='弹窗'
module.exports=Dialog;