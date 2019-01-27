//求和方法
let sum=(...args)=>{
    return args.reduce((prev,next)=>prev+next)
}
module.exports=sum;