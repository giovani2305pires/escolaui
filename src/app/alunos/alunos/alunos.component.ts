import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno [] = [];
  displayedColumns =['id','nomealuno'];


  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.list();
  }

}
