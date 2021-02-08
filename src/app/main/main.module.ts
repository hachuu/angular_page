import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../service/rest.service';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { MovieLayerComponent } from './menu3/components/movie-layer/movie-layer.component';
import { BookLayerComponent } from './menu4/components/book-layer/book-layer.component';
import { LoadingComponent } from 'app/loading/loading.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu6Component } from './menu6/menu6.component';
import { Menu5Component } from './menu5/menu5.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    MainComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    Menu6Component,
    MovieLayerComponent,
    BookLayerComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AgGridModule.withComponents([Menu6Component]),
    ScrollingModule
  ],
  providers: [
    RestService
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
