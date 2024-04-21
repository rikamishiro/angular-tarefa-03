import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormLivroComponent } from './components/form-livro/form-livro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormLivroComponent,
    data: {
      id: '',
    },
  },
  {
    path: ':id',
    component: FormLivroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroEdicaoRoutingModule { }
