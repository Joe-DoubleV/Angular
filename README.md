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
- `ng new project-name` 
- `cd project-name`
- `ng serve --open`
``` shell
ng new angulardemo --skip-install
cd angulardemo
cnmp install
ng serve --open
```
**如果启动失败，注意报错信息，目前出现的问题主要是 nodejs 以及依赖包版本较低，nodejs版本不同默认路径有些区别**

## Angular 添加组件
- `ng g component path/component-name`
``` shell
ng g component components/news
```
#### 绑定数据
html页面读取 .ts 文件中title的值`public title:any = "ImageComponent"`
```html
<h1>绑定数据</h1>
<div class='title'>
  This is a {{title}} !  
</div>
```
#### 绑定属性
html页面中div 的 title属性 的值由 .ts文件中userInfo.name确定
```TypeScript
  public userInfo:object = {
    name : "Joe",
    age : 29 
  }
```
```HTML
<h1>绑定属性</h1>
    <div [title]='userInfo.name'>
      {{content}}
    </div>
    <div [innerHtml] = 'content'></div>
<br>
```
#### 循环
```TypeScript
  public userlist:any[] = [
    {
      name : "QWERTY",
      age : 6,
      ar :['q','p']  
    },
    {
      name : "ASDFGHJKL",
      age : 9,
      ar :['a','l']
    },
    {
      name : "ZXCVBNM",
      age : 7,
      ar :['z','m']
    },
  ]
```

```HTML
<h1>循环</h1>
<ul class="list">
  <li *ngFor="let item of userlist,let i = index">
    {{i}}---{{item.name}}---{{item.age}}
    <ul>
      <li *ngFor="let array of item.ar">
        {{array}}
      </li>
    </ul>
  </li>
</ul>
```
#### ngClass
ngClass用法：`[ngClass]="{cssClass: expression}"`
```css
.list {
    font-size: 35px;
    color: green;
}
```
```
<div [ngClass]="{'list': true}">
  <p>org</p>
</div>
```
#### 事件
```HTML
<h1>事件</h1>
<button (click)='run()'>run</button>
<button (click)='getData()'>flag</button>
<button (click)='runEvent($event)'>flag</button>
<br>
<input type="text" (keydown)="keyDown($event)"/>
<br>
```

#### 双向数据绑定 MVVM （表单专属）
ngModule用法`[(ngModel)]="binding"`
使用前需要导入FormsModule`import { FormsModule } from '@angular/forms' `
```TypeScript
@NgModule({
  declarations: [
    /*      */
    /*      */
    FormComponent,
    /*      */
  ],
/*      */
})
```
```HTML
<h1>双向数据绑定MVVM--表单专属</h1>
    <input type='text' [(ngModel)]="keywords" />    
    {{keywords}}
```
**上例，input输入框的值改变，.ts文件中 keywords的值也会同时改变；**
**.ts文件中 keywords的值改变，input输入框中的值也会同时改变**

## Angular 添加服务
 - `ng g service path/server-name`
``` shell
ng g service services/storage
```
