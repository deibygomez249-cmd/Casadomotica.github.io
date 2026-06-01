import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/casa.model';

@Injectable({ providedIn: 'root' })
export class CasaService {
  private apiUrl = 'http://www.casa-domotica.somee.com/api/Casas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Casa[]> {
    return this.http.get<Casa[]>(this.apiUrl);
  }

  getById(id: number): Observable<Casa> {
    return this.http.get<Casa>(`${this.apiUrl}/${id}`);
  }

  create(data: Casa): Observable<Casa> {
    return this.http.post<Casa>(this.apiUrl, data);
  }

  update(id: number, data: Casa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}