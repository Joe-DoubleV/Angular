import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommomService } from './services/commom.service';

import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // user模块里的组件
  declarations: [ProfileComponent, AddressComponent, UserComponent],
  //引入服务
  providers: [CommomService],
  //暴露组件
  exports: [UserComponent]

})
export class UserModule { }
