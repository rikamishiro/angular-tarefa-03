import {
  Component, inject,
} from '@angular/core';
import {
  CommonModule,
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LivroService } from '../../services/livros.service';

@Component({
  selector: 'app-fantasia',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './fantasia.component.html',
  styleUrl: './fantasia.component.css',
})
export class FantasiaComponent {

  private livroService = inject(LivroService);
  public livros$ = this.livroService.getAll();

}
