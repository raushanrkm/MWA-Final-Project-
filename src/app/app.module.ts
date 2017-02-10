import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {DataService} from './services/data.service';

import {MyRoutesModule} from './app.routes';

import { StatesComponent } from './components/states/states.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsNearMeComponent } from './components/items-near-me/items-near-me.component';
import { SearchedItemsComponent } from './components/searched-items/searched-items.component';
import {ToolbarComponent} from './components/toolbar.component';
import {AuthService} from './services/auth.service';
import { DonateComponent } from './components/donate/donate.component';
import {AddItemCanActivate} from './components/donate/donate.guard';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    CitiesComponent,
    ItemsComponent,
    ItemsNearMeComponent,
    SearchedItemsComponent,
    ToolbarComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRoutesModule,
    ReactiveFormsModule
  ],
  providers: [DataService, AuthService, AddItemCanActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
