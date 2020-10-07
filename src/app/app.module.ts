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
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuComponent } from './components/menu/menu.component';
import { BigSearchBarComponent } from './components/big-search-bar/big-search-bar.component';
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
    ContactComponent,
    NavbarComponent,
    ButtonsComponent,
    SideNavComponent,
    MenuComponent,
    BigSearchBarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
