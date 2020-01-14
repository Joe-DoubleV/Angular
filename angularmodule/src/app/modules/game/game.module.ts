import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GsettingComponent } from './gsetting/gsetting.component';
import { GinfoComponent } from './ginfo/ginfo.component';
import { GlistComponent } from './glist/glist.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [GameComponent, GsettingComponent, GinfoComponent, GlistComponent]
})
export class GameModule { }
