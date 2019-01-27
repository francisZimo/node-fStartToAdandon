##第三方模块
- 通过npm 来进行安装 node package manager
### 全局安装 -g (只能在命令行中安装)
- 默认的安装路径是 (npm root -g ) 不会自动加入环境变量中而是通过npm映射
- C:\Users\Administrator\AppData\Roaming\npm\node_modules
```
npm install nrm -g 安装nrm
nrm test 测试访问时间
nrm ls 显示所有的可用源
nrm use 源名称 使用源
npm uninstall nrm -g 卸载nrm

```
#### http-server
- 帮我们启动一个本地服务
```
npm i -g http-server
http-server -p 3000  在某个路径下启动服务
```
#### idoc
```
npm install -g idoc
```
//npm nrm,nvm node registry manager

#### 本地安装
- 没有-g 参数，安装之前需要初始化，记录安装依赖的
```
npm init -y
```
> package.json ,目录不能有中文，特殊字符，大写，默认先找当前目录下的package.json如果当前没有会去上级查找

#### 项目依赖
- 开发时使用，上线还需要
```
npm install XXX
npm install XXX@1.8.3 //版本号
```

#### 开发依赖
- 开发时使用，线上不使用
```
npm install XXX --ssave-dev
npm uninstall XXX
```

###安装全部依赖
```
npm install
```

## yarn安装
- npm install -g yarn
```
yarn init
yarn add 包
yarn remove 包
yarn add less -dev
yarn install
```

### 想发布包
- 先要回到国外 nrm use npm
- 包名不能和已有的包一致
- 入口文件，做整合用的
- 注册账号,如果有账号表示登陆,新用户需要校验邮箱
```
npm addUser
```
- 发布
```
npm publish
```

#### 第三方模块不需要./的形式引入
>  可以直接通过包名将文件引入，将package.json的main对应的文件运行，如果当前目录下没有找到会向上一级查找，找到计算机的根目录为止
>  console.log(module.paths)

####
typeof



