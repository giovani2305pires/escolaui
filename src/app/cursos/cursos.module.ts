import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListacursosComponent } from './listacursos/listacursos.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ListacursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CursosModule { }
