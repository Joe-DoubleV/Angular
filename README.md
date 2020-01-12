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

**添加服务需要导入2次**
- 根模块app.modules.ts
```TypeScript
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [
    /*        */
  ],
  imports: [
    /*        */
  ],
  providers: [StorageService,],
  /*        */
})
```
- 实际调用的组件 form.component.ts
```TypeScript
import { StorageService } from '../../services/storage.service'
```
## ViewChild
### viewChild获取Dom节点
**1. 在模板中命名dom**
```HTML
    <div #mybox>
      this is a dom node
    </div>
```
mybox是为这个div的"代号"
**2. 在业务逻辑中引入ViewChild**

    import { Component, OnInit ,ViewChild } from '@angular/core';
**3. 在类中实现**

    @ViewChild('mybox') thisboxs:any;
**4. ngAfterViewInit()生命周期函数中获取/操作dom**
```TypeScript
ngAfterViewInit() {    
    /*建议在这里 操作dom 这时dom已经加载完毕*/    
    console.log(this.thisboxs);
    this.thisboxs.nativeElement.style.width='300px';    
    this.thisboxs.nativeElement.style.height='100px';    
    this.thisboxs.nativeElement.style.background='red';
    console.log(this.thisboxs.nativeElement.innerText);
  }
```
### 父子组件通过viewChild调用子组件的方法
#### 这里是父子组件 主动 调用子组件的方法
**1. 在模板中命名**

    <app-header #header></app-header>
header是子组件

**2. 在父组件中引入ViewChild**

    import { Component, OnInit ,ViewChild } from '@angular/core';
**3. 在父组件类中获取**

    //获取组件
    @ViewChild('header') child_Header:any;
**4. 父组件中使用方法和属性**

    this.child_Header.run();
    alert(this.child_Header.info);
## 组件传值
### 父组件通过@Input()传给子组件
**1. 父组件引入子组件，并传属性**

`<app-header [name_child]='name_parent'></app-header>`

    <app-header [title_header]='title' [func_header]='start' [home]='this'></app-header>
[home]='this' 传给子组件接收父组件本身

**2. 子组件逻辑中引入Input**

    import { Component, OnInit ,Input } from '@angular/core';
**3. 在子组件类中获取**

`@Input() public [name_child]:any;`

      //子组件中接收父组件
    @Input() public title_header:string;
    @Input() public func_header(){};
    @Input() public home:any;
**4. 子组件使用父组件方法和属性**

`<h1>这是一个{{name_child}}页面</h1>`
`alert(this.child_Header.info);`

    public start(){
    //调用父组件方法
        this.func_header();
    }
    public all() {
        alert(this.home.title);
        this.home.start();
    }
### 子组件通过@Qutput触发父组件方法
#### 这里是父子组件 被动 调用子组件的方法
**1. 在子组件导入Output，EventEmitter**

`import { Component, OnInit, Output, EventEmitter } from '@angular/core';`

**2. 在子组件里面定义并暴露出自定义事件**

`@Output() outer_name = new EventEmitter<any>();`

    //暴露自定义事件
    @Output() outer = new EventEmitter<any>();
    
**3. 在子组件里面需要弹射的函数里面弹射变量**

`this.name.emit(any)`

    //changes()是普通函数
    public changes() {
        console.log("子组件changes()");
        this.outer.emit(this.inputs)
    }
**4. 在父组件里面通过$event接收变量**

`<app-footer (outer_name)='func_name($event)'></app-footer>`
`func_name(e){}`

    <app-footer (outer)='footerOut($event)'></app-footer><!-- HTML -->

    //TypeScript
    public footerOut(e) {
        console.log("this is footerOut()");
        console.log(e);
        alert(e);
    }
    
## 兄弟组件传值
### 子组件footer通过@Qutput触发父组件方法
### 父组件通过@Input()传给子组件header

## 路由搭建
根据版本不同，angular/cli 创建应用的语句不同
- `ng new angulardemo --routing --skip-install`
创建默认路由的语句

如果之前创建的应用没有路由，可以通过
1. 将 app.module.ts 暂时改名为 app.module.ts.bak
2. `ng g m App --flat --routing`
3. 删除新建的 app.module.ts，并将app.module.ts.bak 恢复为app.module.ts 并在 imports 加上刚刚建立的 AppRoutingModule
4. 修改 AppRoutingModule，将forChild() 改成 forRoot()

### 实现
1. app.module.ts 导入 AppRoutingModule
2. app-routing.module.ts 中导入组件，并在routes中配置路径
```TypeScript
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
    {
      path:'home',component:HomeComponent
    },
    {
      path:'news',component:NewsComponent
    },
    {
      path:'image',component:ImageComponent
    },
    {
      path:'form',component:FormComponent
    },
    //默认路径为 home
    { path: '**', redirectTo:'home' }


];
```
3. 在app.component.html中加入`<router-outlet></router-outlet>`和链接,注意和routes中对应
```HTML
<h1>
  <a [routerLink]="['/home']" routerLinkActive="router-link-active" >HOME</a>
  <a [routerLink]="['/news']" routerLinkActive="router-link-active" >NEWS</a>
  <a [routerLink]="['/image']" routerLinkActive="router-link-active">IMAGE</a>
  <a [routerLink]="['/form']" routerLinkActive="router-link-active" >FORM</a>
</h1>

<router-outlet></router-outlet>
```
## 动态路由
### get传值
1. 跳转

```HTML
//news
<ul>
  <li *ngFor="let item of list ;let key=index;" >
    <!-- <a href="#">{{key}}---{{item}}</a> -->
    <a [routerLink]="['/newscontent']" [queryParams]={aid:key} >{{key+1}}---{{item}}</a>
  </li>
</ul>
```
2. 接收
```TypeScript
//newscontent
import { ActivatedRoute } from '@angular/router';

constructor(public route:ActivatedRoute) { }

ngOnInit() {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data)=>{
      console.log(data);

    })
  }
```

