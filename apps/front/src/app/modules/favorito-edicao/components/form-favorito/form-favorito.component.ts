import { Component, Input, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { FavoritoEdicaoService } from '../../services/favorito-edicao.service';
import { IFavorito } from '@nx-monorepo/comum';

@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrl: './form-favorito.component.css',
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
export class FormFavoritoComponent implements OnInit {

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
    descricao: ['', Validators.required],
    imagem: ['', Validators.required],
    url: ['', Validators.required],
  });

  public favoritoEdicaoService = inject(FavoritoEdicaoService);

  public enviar(): void {
    const favorito = this.formGroup.value as IFavorito; // Casting.
    if (favorito._id) {
      // Editar favorito:
      this.favoritoEdicaoService.put(favorito).subscribe(
        favoritoGravado => {
          console.log('Banco gravou', favoritoGravado);
        },
      );
    } else {
      // Novo favorito:
    }
  }

  public ngOnInit(): void {
    // Se estiver editando um registro:
    if (this.id) {
      // Recupera os dados iniciais do formulário:
      this.favoritoEdicaoService.get(+this.id).subscribe(
        favorito => {
          this.formGroup.setValue(favorito);
        },
      );
    }
  }

}
