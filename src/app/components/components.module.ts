import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifaCardComponent } from './fifa-card/fifa-card.component';



@NgModule({
  declarations: [
    FifaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FifaCardComponent
  ]
})
export class ComponentsModule { }
