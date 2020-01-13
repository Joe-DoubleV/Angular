import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';
import { HomeComponent } from './components/home/home.component'
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ImagecontentComponent } from './components/imagecontent/imagecontent.component';
import { ProductComponent } from './components/product/product.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
const routes: Routes = [
    {
      path:'home',component:HomeComponent,
      children:[
        {path:'welcome',component:WelcomeComponent},
        {path:'setting',component:SettingComponent},
        { path: '**', redirectTo:'welcome' }
      ]
    },
    {
      path:'product',component:ProductComponent,
      children:[
        {path:'plist',component:PlistComponent},
        {path:'pcate',component:PcateComponent},
        { path: '**', redirectTo:'plist' }
      ]
    },
    {
      path:'news',component:NewsComponent
    },
    {
      path:'newscontent',component:NewscontentComponent
    },
    {
      path:'newscontent02/:aid',component:NewscontentComponent
    },
    {
      path:'image',component:ImageComponent
    },
    {
      path:'form',component:FormComponent
    },
    {
      path:'imagecontent',component:ImagecontentComponent
    },
    {
      path:'imagecontent/:aid',component:ImagecontentComponent
    },
    //默认路径为 home
    { path: '**', redirectTo:'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
