import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';
import { HomeComponent } from './components/home/home.component'
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';


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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
