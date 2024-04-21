import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'livro-edicao',
    loadChildren: () => import(
      './modules/livro-edicao/livro-edicao.module',
    ).then(m => m.LivroEdicaoModule),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/sobre'
  },
];
