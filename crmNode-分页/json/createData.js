function getRandom(n,m){
    return Math.round(Math.random()*(m-n)+n);
}
var strXing='赵钱孙李周吴郑王冯陈楚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜'
var strName='一二三四五六七八九'
var ary=[];
for (var i = 1; i < 100; i++) {
    var obj = {};
    obj.id=i;
    obj.name=strXing[getRandom(0,31)]+strName[getRandom(0,8)];
    obj.sex=getRandom(0,1);
    obj.score=getRandom(50,100);
    ary.push(obj);
}
console.log(JSON.stringify(ary));