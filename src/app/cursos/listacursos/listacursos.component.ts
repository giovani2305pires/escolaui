import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

cursos: Observable<Curso[]>;
displayedColumns =['id','nomecurso'];

constructor(private  cursosService: CursosService) {
  this.cursos = this.cursosService.list();
 }

  ngOnInit(): void {

  }

}
