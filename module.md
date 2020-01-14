# Angular 学习笔记

## angular自定义模块，配置懒加载

**1. 新建项目，带路由**
`ng new name --routing --skip-install`

```shell
ng new angularmodule --routing --skip-install
```

**2. 新建模块，带路由**
`ng g module path/name --routing`或者`ng g m path/name --routing`

```shell
ng g m modules/article --routing
ng g m modules/product --routing
ng g m modules/game --routing
```
**3. 建立模块的根组件和其他组件**
`ng g c path/modulename`

`ng g c modules/modulename/../componentname`
```shell
ng g c modules/article   
ng g c modules/article/alist    
ng g c modules/article/ainfo    
ng g c modules/article/asetting 
```
**4. 配置懒加载**

```
//app-routing.module.ts

const routes: Routes = [

  {path:'product',loadChildren:'./modules/product/product.module#ProductModule'},
  {path:'article',loadChildren:'./modules/article/article.module#ArticleModule'},
  {path:'game',loadChildren:'./modules/game/game.module#GameModule'},
  // {path:'**',redirectTo:'product'}

];
``` 
**5. 配置模块路由**
#### 注意子路由 对应 子组件；同级路由 对应 同级组件
```TypeScript
//article-routing.module.ts

const routes: Routes = [
    //子路由 对应 子组件
  {
    path:'',
    component:ArticleComponent,
    children:[
      {path:'info',component:AinfoComponent},
      {path:'setting',component:AsettingComponent},
    ]
  },
    //同级路由 对应 同级组件
  {path:'list',component:AlistComponent},
  

];
```