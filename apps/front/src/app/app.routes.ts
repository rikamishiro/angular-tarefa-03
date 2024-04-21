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
    path: 'favorito-edicao',
    loadChildren: () => import(
      './modules/favorito-edicao/favorito-edicao.module',
    ).then(m => m.FavoritoEdicaoModule),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/sobre'
  },
];
