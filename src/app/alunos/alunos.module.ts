import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class AlunosModule { }
