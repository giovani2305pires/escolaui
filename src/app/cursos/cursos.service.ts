import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API);
  }
}
