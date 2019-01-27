class EventEmitter{ //{'失恋':[eat,cry,shopping]}
    constructor(){
        this._events={}
    }
    on(eventName,callback){
        if(!this._events[eventName]){ //如果存在eventName
            this._events[eventName]=[callback]
        }else{
            this._events[eventName].push(callback);
        }
    }
    emit(eventName){
        if(this._events[eventName]){
            this._events[eventName].forEach(cb => cb());
        }
    }
    removeListener(eventName,callback){
        if(this._events[eventName]){
            this._events[eventName]=this._events[eventName].filter(cb=>cb!=callback)
        }
    }
    once(eventName,callback){
        let fn=()=>{ //绑定的是fn 执行的时候会触发fn函数
            callback(); //fn函数中调用原有的callback
            this.removeListener(eventName,fn) //删除fn 再次执行的时候只会执行一次
        }
        this.on(eventName,fn); //1.先绑定 2.要在callback中删除绑定
    }
}
let e=new EventEmitter();
let cry=()=>{console.log('cry');}
let shopping=()=>{console.log('购物');}
e.on('失恋',cry);
e.once('失恋',shopping);
e.emit('失恋');
e.removeListener('失恋',cry)
e.emit('失恋');