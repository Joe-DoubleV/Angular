import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';

import { StorageService } from './services/storage.service';
import { ImageComponent } from './components/image/image.component'
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FormComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
