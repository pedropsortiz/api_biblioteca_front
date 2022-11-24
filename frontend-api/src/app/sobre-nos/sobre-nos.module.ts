import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreNosRoutingModule
  ]
})
export class SobreNosModule { }
