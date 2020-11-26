import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRouterModule } from './header.router.module';
import { NavigationModule } from './components/navigation/navigation.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRouterModule,
    NavigationModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
