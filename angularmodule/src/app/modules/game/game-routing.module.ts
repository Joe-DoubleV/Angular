import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { GlistComponent } from './glist/glist.component';
import { GinfoComponent } from './ginfo/ginfo.component';
import { GsettingComponent } from './gsetting/gsetting.component';

const routes: Routes = [

  {
    path:'',component:GameComponent,
    children:[
      {path:'list',component:GlistComponent},
      {path:'info',component:GinfoComponent},
      {path:'setting',component:GsettingComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
