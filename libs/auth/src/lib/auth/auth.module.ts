import {
  InjectionToken,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

export const API_BASE = new InjectionToken<string>('URL base da API');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
