import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsumoEnergia } from '../models/consumo-energia.model';

@Injectable({ providedIn: 'root' })
export class ConsumoEnergiaService {
  private apiUrl = 'api/ConsumosEnergia';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ConsumoEnergia[]> {
    return this.http.get<ConsumoEnergia[]>(this.apiUrl);
  }

  getById(id: number): Observable<ConsumoEnergia> {
    return this.http.get<ConsumoEnergia>(`${this.apiUrl}/${id}`);
  }

  create(data: ConsumoEnergia): Observable<ConsumoEnergia> {
    return this.http.post<ConsumoEnergia>(this.apiUrl, data);
  }

  update(id: number, data: ConsumoEnergia): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}