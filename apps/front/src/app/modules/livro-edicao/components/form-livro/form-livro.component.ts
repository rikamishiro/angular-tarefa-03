import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { LivroEdicaoService } from '../../services/livros-edicao.service';
import { ILivro } from '@nx-monorepo/comum';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrl: './form-livro.component.css',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
})
export class FormLivroComponent implements OnInit {

  @Input({
    required: true,
  })
  public set id(value: string) {
    this.formGroup.controls['_id'].setValue(+(value || '0'));
  }
  public get id(): string {
    return `${this.formGroup.controls['_id'].value || ''}`;
  }

  private fb = inject(FormBuilder);
  public formGroup = this.fb.group({
    _id: 0,
    titulo: ['', Validators.required],
    capa_img: ['', Validators.required],
    autor: ['', Validators.required],
    ano: ['', Validators.required],
    genero: ['', Validators.required],
  });

  public livroEdicaoService = inject(LivroEdicaoService);
  private router = inject(Router);

  public enviar(): void {
    const livro = this.formGroup.value as ILivro; // Casting.
    if (livro._id) {
      // Editar livro:
      this.livroEdicaoService.put(livro).subscribe(
        livroGravado => {
          this.router.navigate(['/']);
        },
      );
    } else {
      // Novo livro:
      this.livroEdicaoService.post(livro).subscribe(
        livroGravado => {
          this.router.navigate(['/']);
        }
      )
    }
  }

  public ngOnInit(): void {
    // Se estiver editando um registro:
    if (this.id) {
      // Recupera os dados iniciais do formulário:
      this.livroEdicaoService.get(+this.id).subscribe(
        livro => {
          this.formGroup.setValue(livro);
        },
      );
    }
  }

}
