import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NossoAcervoRoutingModule } from './nosso-acervo-routing.module';
import { AcervoComponent } from './acervo/acervo.component';


@NgModule({
  declarations: [
    AcervoComponent
  ],
  imports: [
    CommonModule,
    NossoAcervoRoutingModule
  ]
})
export class NossoAcervoModule { }
