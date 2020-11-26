import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { EmailLayerComponent } from '../emailLayer/email-layer.component';



@NgModule({
  declarations: [NavigationComponent, EmailLayerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
