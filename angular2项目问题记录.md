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
