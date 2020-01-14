import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { AlistComponent } from './alist/alist.component';
import { AinfoComponent } from './ainfo/ainfo.component';
import { AsettingComponent } from './asetting/asetting.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleComponent, AlistComponent, AinfoComponent, AsettingComponent]
})
export class ArticleModule { }
