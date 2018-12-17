import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//Angular-Material Imports
import {MatSelectModule, MatTableModule, MatSortModule,
MatPaginatorModule, MatDividerModule} from '@angular/material';


//ThirdPartyComponents
import {TableModule} from 'ngx-easy-table';
import { AppRoutingModule } from './app-routing.module';
import { GraphViewComponent } from './graph-view/graph-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    GraphViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    //Third Party
    TableModule,
    
    //Angular Material Imports
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
