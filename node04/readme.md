## express 搭建服务
```javascript
let express=express();
let app=express();
app.listen(3003)
```

## express 路由
- 必须method和path全都匹配上执行对应的callback
```javascript
app[method](path,function(req,res){})
app.all('*',function(){})

```
## 路径参数路由
- 将匹配的结果生成一个对象放到req.params上
```javascript
app.get('/user/:id/name')
```

## req上的属性
```javascript
req.params //路径参数
req.url //整个的路径
req.path //pathname路径
req.headers //请求头
req.method //请求的方法
req.query //获取请求的参数 问号后面的参数

```
## middleware
- 中间件的作用
  - 处理公共逻辑,扩展req,res
  - 可以处理是否继续执行
  - 开头匹配到就会执行中间件
  - 错误中间件，在页面的最后，参数是4个，第一个参数中是错误
  
## res新增的方法
- res.json()
- res.sendFile() 绝对路径 path.join/path.resolve
- res.sendStatus();
- res.send();

## 用户管理模块
- 登陆 /login
- 注册 /reg
## 文章管理模块
- 发表文章 /post
- 删除文章 /delete

## bodyParser
```javascript
let bodyParser=require('body-parser');
//解析表单格式 把表单内的数据 解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}));
//解析json格式 把json格式转换为对象 解析后放在req.body上
app.use(bodyParser.json())

```

### 路由拆分
```javascript
let express=require('express')
let app=express();
let router=express.Router();
router.get('/login',fn)
app.use('/user',router)

```

### bodyParser

```javascript
app.use(bodyParser.json()) //解析json application/json
app.use(bodyParser.urlencoded({extended:true})) //解析表单 application/www-x-form-urlencoded

```

### ejs (前后端分离不适用ejs)
```javascript
app.set('view engine','html');
app.set('view','static')
app.engine('html',require('ejs').__express);
res.render('index',渲染的数据)

```
- ejs用法
```javascript
<%include '文件名'%>
<%=变量%>
<%-转义变量%>
<%for(var i=0;i<10;i++){%>
<li><%=i%></li>
<%}%>
```

### 静态服务中间件
```javascript
app.use(express.static('文件夹'))
```

### 重定向
```javascript
res.redirect('路径')
```

