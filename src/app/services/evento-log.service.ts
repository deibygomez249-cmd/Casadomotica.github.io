import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventoLog } from '../models/evento-log.model';

@Injectable({ providedIn: 'root' })
export class EventoLogService {
  private apiUrl = 'http://www.casa-domotica.somee.com/api/EventosLogs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<EventoLog[]> {
    return this.http.get<EventoLog[]>(this.apiUrl);
  }

  getById(id: number): Observable<EventoLog> {
    return this.http.get<EventoLog>(`${this.apiUrl}/${id}`);
  }

  create(data: EventoLog): Observable<EventoLog> {
    return this.http.post<EventoLog>(this.apiUrl, data);
  }

  update(id: number, data: EventoLog): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}