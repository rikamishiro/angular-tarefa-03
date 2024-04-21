import {
  Injectable,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, share } from 'rxjs';

import { IFavorito } from '@nx-monorepo/comum';

import { API_BASE } from '@nx-monorepo/auth';

@Injectable({
  providedIn: 'root',
})
export class FavoritoEdicaoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public get(id: number): Observable<IFavorito> {
    return this.httpClient.get<IFavorito>(
      `${this.apiBase}/favorito/${id}`,
    );
  }

  public put(favorito: IFavorito): Observable<IFavorito> {
    const req$ = this.httpClient.put<IFavorito>(
      `${this.apiBase}/favorito/${favorito._id}`,
      favorito,
    ).pipe(
      share(),  // Compartilha o mesmo stream com todos os inscritos.
    );

    // Dispara a requisição:
    req$.subscribe();

    return req$;
  }

  public post(favorito: IFavorito): Observable<IFavorito> {
    const req$ = this.httpClient.post<IFavorito>(
      `${this.apiBase}/favorito/`,
      favorito,
    ).pipe(
      share(),  // Compartilha o mesmo stream com todos os inscritos.
    );

    // Dispara a requisição:
    req$.subscribe();

    return req$;
  }

}
