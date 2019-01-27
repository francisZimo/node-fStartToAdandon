//Buffer.fill方法，填充buffer中的内容
//var buffer=Buffer.from([1,2,3]);
//var buffer1=Buffer.alloc(10);
//var buffer2=Buffer.alloc(10,1);
//var buffer3=Buffer.allocUnsafe(10);
//buffer3.fill(12)
//console.log(buffer3);


//buffer.toString,将buffer转换成字符串
//var buffer=Buffer.from('tom爱学习')
//console.log(buffer.toString())

//Buffer.slice方法，截取想要的buffer
//2.slice方法（截取，克隆：深（递归循环parse(stringify)）,浅（slice assign,{...{},...{}}））
//var buffer=Buffer.from([1,2,3]);
//var newBuffer=buffer.slice(1,2)
//newBuffer[0]=100;
//console.log(buffer);

//Buffer.copy方法，拷贝buffer



//buf.copy(buf, 0, 4, 10);
//console.log(buf.toString());



//Buffer.concat方法，buffer的拼接方法
//var buf1=Buffer.from('~~tom');
//var buf2=Buffer.from('--love francis')
//console.log(Buffer.concat([buf1,buf2]).toString())


//拷贝buffer(copy)
//targetBuffer 目标buffer，targetStart目标的开始，sourceStart源的开始，sourceEnd源的结束this.length
//var buf1=Buffer.from('~~tom');
//var buf2=Buffer.from('--love francis')
//var buf=Buffer.allocUnsafe(15);
//buf1.copy(buf,0,2,5)
//buf2.copy(buf,3,2)
//console.log(buf.toString());
//var buf1=Buffer.from('tom');
//var buf2=Buffer.from('love francis')
//Buffer.MyConcat=function(list,totalLength){
//    //1.判断长度是否传递，如果传递了用传递的参数，没有传就自己算一个总长度
//    if(typeof totalLength==='undefined'){
//        totalLength=list.reduce((prev,next)=>{
//           return prev+next.length
//        },0)
//    }
//    //2.通过长度创建一个这么大的buffer Buffer.alloc(len)
//    let buffer=Buffer.alloc(totalLength);
//    //3.在循环list将每一项拷贝到这个大的buffer上buf.copy
//    let offset=0;
//    list.forEach(buff=>{
//        if(!Buffer.isBuffer(buff)){  //isBuffer判断当前是不是buffer类型
//             throw new Error('not buffer')
//        }
//        buff.copy(buffer,offset);
//        offset+=buff.length;
//    })
//    //4.如果长度过长fill或者可以采用slice截取有效长度
//    //5.返回一个新buffer
//    return buffer.slice(0,offset)
//}
//console.log(Buffer.isBuffer(buf1));
//console.log(Buffer.isBuffer(buf2));
//console.log(Buffer.MyConcat([buf1,buf2,buf1]).toString())


//Buffer.isBuffer,判断是否是buffer类


//base64 进制转化
let buf=Buffer.from('王')
//把一个汉字的24位，转为4个字节，每个字节就是6位，不足的补0
console.log(buf);
//1.把16进制转化为2进制toString()
console.log((0xe7).toString(2)); //11100111
console.log((0x8e).toString(2)); //10001110
console.log((0x8b).toString(2)); //10001011
//4个字节  00111001  00111000  00111010 00001011
//2.将这些值转化为10进制，去可见编码中取值 paeseInt
console.log(parseInt('00111001', 2));
console.log(parseInt('00111000', 2));
console.log(parseInt('00111010', 2));
console.log(parseInt('00001011', 2));
// 57 56 58 11
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+='abcdefghijklmnopqrstuvwxyz';
str+='0123456789';
str+='+/';
console.log(str.length);
console.log(str[57]+str[56]+str[58]+str[11])
console.log(buf.toString('base64'));


