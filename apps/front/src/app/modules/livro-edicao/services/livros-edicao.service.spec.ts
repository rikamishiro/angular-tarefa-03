import { TestBed } from '@angular/core/testing';

import { LivroEdicaoService } from './livro-edicao.service';

describe('LivroEdicaoService', () => {

  let service: LivroEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(LivroEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
