# Angular 学习笔记
**这是第一次写md**

## Angular 安装部署

- 安装 node.js
- 安装 npm/cnpm
	`npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 安装 脚手架：angular/cli
	`npm install -g @angular/cli`
	或者
    `cnpm install -g @angular/cli`
    
## Angular 创建项目
ng new project-name
cd project-name
ng serve --open
``` shell
ng new angulardemo
cd angulardemo
ng serve --open
```
**如果启动失败，注意报错信息，目前出现的问题主要是 nodejs 以及依赖包版本较低，nodejs版本不同默认路径有些区别**
