import {
  HttpClient,
} from '@angular/common/http';
import {
  Injectable,
  inject,
} from '@angular/core';

import { Observable, shareReplay } from 'rxjs';

import { ILivro } from '@nx-monorepo/comum';

import { API_BASE } from '@nx-monorepo/auth';

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public getAll(): Observable<ILivro[]> {
    return this.httpClient.get<ILivro[]>(
      `${this.apiBase}/livro`,
    ).pipe(
      shareReplay(),
    );
  }

}
