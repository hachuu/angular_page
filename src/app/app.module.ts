import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './service/rest.service';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MainModule,
    LoginModule,
    FlexLayoutModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }