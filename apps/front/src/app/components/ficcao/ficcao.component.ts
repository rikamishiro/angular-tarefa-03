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
  selector: 'app-ficcao',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './ficcao.component.html',
  styleUrl: './ficcao.component.css',
})
export class FiccaoComponent {

  private livroService = inject(LivroService);
  public livros$ = this.livroService.getAll();

}
