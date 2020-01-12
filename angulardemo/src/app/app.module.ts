import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';

import { StorageService } from './services/storage.service';
import { CommtempService } from './services/commtemp.service';
import { ImageComponent } from './components/image/image.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component'
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FormComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewscontentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StorageService,
    CommtempService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
