import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: "full", redirectTo: 'index' },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'acervo',
    loadChildren: () => import('./nosso-acervo/nosso-acervo.module').then(m => m.NossoAcervoModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre-nos/sobre-nos.module').then(m => m.SobreNosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
