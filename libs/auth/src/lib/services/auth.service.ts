import {
  HttpClient,
} from '@angular/common/http';
import {
  Injectable,
  inject,
} from '@angular/core';

import { API_BASE } from '../auth/auth.module';
import { IUsuarioESenha, IUsuarioLogado } from '@nx-monorepo/comum';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public login(usuario: IUsuarioESenha): Observable<IUsuarioLogado> {
    return this.httpClient.post<IUsuarioLogado>(
      `${this.apiBase}/auth/login`,
      usuario,
    ).pipe(
      tap(usuarioLogado => {
        localStorage.setItem('jwt', usuarioLogado.jwt);
      }),
    );
  }

}
