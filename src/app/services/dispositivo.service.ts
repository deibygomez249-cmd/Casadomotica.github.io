import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivo.model';

@Injectable({ providedIn: 'root' })
export class DispositivoService {
  private apiUrl = 'http://www.casa-domotica.somee.com/api/Dispositivos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(this.apiUrl);
  }

  getById(id: number): Observable<Dispositivo> {
    return this.http.get<Dispositivo>(`${this.apiUrl}/${id}`);
  }

  create(data: Dispositivo): Observable<Dispositivo> {
    return this.http.post<Dispositivo>(this.apiUrl, data);
  }

  update(id: number, data: Dispositivo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}