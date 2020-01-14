import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component'
import { AlistComponent } from './alist/alist.component';
import { AinfoComponent } from './ainfo/ainfo.component';
import { AsettingComponent } from './asetting/asetting.component';
 
const routes: Routes = [

  {
    path:'',
    component:ArticleComponent,
    children:[
      {path:'info',component:AinfoComponent},
      {path:'setting',component:AsettingComponent},
    ]
  },
  {path:'list',component:AlistComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
