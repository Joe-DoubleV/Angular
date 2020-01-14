import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'product',loadChildren:'./modules/product/product.module#ProductModule'},
  {path:'article',loadChildren:'./modules/article/article.module#ArticleModule'},
  {path:'game',loadChildren:'./modules/game/game.module#GameModule'},
  // {path:'**',redirectTo:'product'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
