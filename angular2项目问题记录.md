#  Angular2 项目问题及解决

## 引入第三方依赖

1. 先安装第三方包

        npm install jquery --save
        npm install @types/jquery --save-dev
    
2. 在angular-cli.json文件中引入第三方包

        "srcipt":[
            "../node_modules/jquery/dist/jquery.js"
        ]

3. 在src文件下面的tsconfig.json中继续声明

        "types":[  
            "./node_modules/@types/jquery/index.d.ts"
        ] 

4. 当引入bootstrap时，使用3.3.7的版本，先不要用4.0的版本，不然会报错

## Angular之http

在项目服务组件中调用外部api接口

        getMovie():Observable<any>{
                return this.http.get("/v2/movie/in_theaters").map((res:any)=> {
                return res.json();
                });
        }

其中会遇到跨域问题

解决办法

1. 在根目录下面新建proxy.config.json文件，添加下面内容到文件中

        {
                "/":{
                "target":"https://api.douban.com",
                "secure":false,
                "changeOrigin":true
                }
        }

2. 修改package.json文件

        "start": "ng serve --proxy-config proxy.config.json"

3. 重新启动项目

        npm run start



