import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressSearchComponent } from './address-search/address-search.component';
import { DisplayResultPageComponent } from './display-result-page/display-result-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoMainComponent } from './info-main/info-main.component';
import {NgOptimizedImage} from "@angular/common";
import {RestaurantListComponentComponent} from "./restaurant-list-component/restaurant-list-component.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CarouselComponent,
    InfoMainComponent,
    AddressSearchComponent,
    DisplayResultPageComponent,
    RestaurantListComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
