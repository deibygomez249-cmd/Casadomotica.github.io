import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiposUsuario } from '../models/tipos-usuario.model';

@Injectable({ providedIn: 'root' })
export class TiposUsuarioService {
  private apiUrl = 'api/TiposUsuarios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TiposUsuario[]> {
    return this.http.get<TiposUsuario[]>(this.apiUrl);
  }

  getById(id: number): Observable<TiposUsuario> {
    return this.http.get<TiposUsuario>(`${this.apiUrl}/${id}`);
  }

  create(data: TiposUsuario): Observable<TiposUsuario> {
    return this.http.post<TiposUsuario>(this.apiUrl, data);
  }

  update(id: number, data: TiposUsuario): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}