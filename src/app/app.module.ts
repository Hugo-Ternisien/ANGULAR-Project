import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoMainComponent } from './info-main/info-main.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CarouselComponent,
    InfoMainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
