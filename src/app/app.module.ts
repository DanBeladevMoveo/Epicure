import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { DishComponent } from './components/dish/dish.component';
import { DetailsComponent } from './components/details/details.component';
import { CheffComponent } from './components/cheff/cheff.component';
import { CheffResturantComponent } from './components/cheff-resturant/cheff-resturant.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    MainSearchComponent,
    SearchBoxComponent,
    RecommendationsComponent,
    ResturantComponent,
    DishComponent,
    DetailsComponent,
    CheffComponent,
    CheffResturantComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
