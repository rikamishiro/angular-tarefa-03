import {
  Injectable,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, share } from 'rxjs';

import { ILivro } from '@nx-monorepo/comum';

import { API_BASE } from '@nx-monorepo/auth';

@Injectable({
  providedIn: 'root',
})
export class LivroEdicaoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public get(id: number): Observable<ILivro> {
    return this.httpClient.get<ILivro>(
      `${this.apiBase}/livro/${id}`,
    );
  }

  public put(livro: ILivro): Observable<ILivro> {
    const req$ = this.httpClient.put<ILivro>(
      `${this.apiBase}/livro/${livro._id}`,
      livro,
    ).pipe(
      share(),  // Compartilha o mesmo stream com todos os inscritos.
    );

    // Dispara a requisição:
    req$.subscribe();

    return req$;
  }

  public post(livro: ILivro): Observable<ILivro> {
    const req$ = this.httpClient.post<ILivro>(
      `${this.apiBase}/livro/`,
      livro,
    ).pipe(
      share(),  // Compartilha o mesmo stream com todos os inscritos.
    );

    // Dispara a requisição:
    req$.subscribe();

    return req$;
  }

}
