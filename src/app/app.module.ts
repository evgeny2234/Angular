import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { PipesComponent } from './pipes/pipes.component';
import { CarComponent } from './params/car/car.component';
import { CarssComponent } from './params/carss/carss.component';
import { AddTableComponent } from './getData/add-table/add-table.component';
import { TableComponent } from './getData/table/table.component';
import { TablesComponent } from './getData/tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NgifelseComponent,
    NgforComponent,
    NgClassComponent,
    PipesComponent,
    CarComponent,
    CarssComponent,
    AddTableComponent,
    TableComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
