import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcervoComponent } from './acervo/acervo.component';

const routes: Routes = [

  { path: '', component: AcervoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NossoAcervoRoutingModule { }
