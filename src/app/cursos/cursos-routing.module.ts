import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListacursosComponent } from './listacursos/listacursos.component';

const routes: Routes = [
  {
    path: '', component: ListacursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
