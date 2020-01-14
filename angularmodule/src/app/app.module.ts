import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//引入自定义模块
import { UserModule } from './modules/user/user.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  //引入自定义模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
